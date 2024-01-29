import React, { useEffect, useState } from "react";
import Context from "./AccessContext";
import Cookies from "js-cookie";
import ClientError from "../exeptions/client-error";
import UserDto from "../dtos/user-dto";
import axios from "axios";

const REFRESH_URL =
  process.env.REACT_APP_API_URL +
  process.env.REACT_APP_API_BASE_PATH +
  "/refresh";
const LOGIN_URL =
  process.env.REACT_APP_API_URL +
  process.env.REACT_APP_API_BASE_PATH +
  "/login";
const LOGOUT_URL =
  process.env.REACT_APP_API_URL +
  process.env.REACT_APP_API_BASE_PATH +
  "/logout";
const REGISTER_URL =
  process.env.REACT_APP_API_URL +
  process.env.REACT_APP_API_BASE_PATH +
  "/register";
const ME_URL =
  process.env.REACT_APP_API_URL + process.env.REACT_APP_API_BASE_PATH + "/me";
export default function AccessContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState(undefined);
  const [username, setUsername] = useState(undefined);
  const [isActivatedAccount, setIsActivatedAccount] = useState(false);
  const [accesed, setAccessed] = useState(false);

  const [userData, setUserData] = useState({});

  const setAccessTokenToLocalStorage = (ACCESS_TOKEN) => {
    if (ACCESS_TOKEN) {
      localStorage.setItem("Access-Token", ACCESS_TOKEN);
      return true;
    }
    return false;
  };
  const getAccessTokenFromLocalStorage = () => {
    const ACCESS_TOKEN = localStorage.getItem("Access-Token");
    if (ACCESS_TOKEN) {
      return ACCESS_TOKEN;
    }
    return null;
  };
  const refresh = async () => {
    try {
      const response = await axios.get(REFRESH_URL);
      if (response.status == 200) {
        const userData = new UserDto(response.data);
        return {
          accessTkn: userData.accessTkn,
          isActivated: userData.isActivated,
          email: userData.email,
        };
      }
      return null;
    } catch (error) {
      return null;
    }
  };
  const _logout = async () => {
    const response = await axios.post(LOGOUT_URL);
    if (response.status == 200) {
      return true;
    }
    return false;
  };
  const logoutHandler = async () => {
    const response = await _logout();
    if (response) {
      localStorage.removeItem("Access-Token");
      window.location.reload();
    }
  };
  const _login = async (email, password) => {
    try {
      const response = await axios.post(LOGIN_URL, { email, password });
      if (response.status == 200) {
        const userData = new UserDto(response.data);
        return {
          accessTkn: userData.accessTkn,
          isActivated: userData.isActivated,
          email: userData.email,
        };
      }
    } catch (error) {
      return null;
    }
  };
  const loginHandler = async (email, password) => {
    const userData = await _login(email, password);

    if (!userData) {
      throw new ClientError.BadRequest("Bad request");
    }

    setAccessToken(userData.accessTkn);
    setUsername(userData.email);
    setIsActivatedAccount(userData.isActivated);
  };
  const _register = async (email, password) => {
    try {
      const response = await axios.post(REGISTER_URL, { email, password });
      if (response.status == 200) {
        const userData = new UserDto(response.data);
        return {
          accessTkn: userData.accessTkn,
          isActivated: userData.isActivated,
          email: userData.email,
        };
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };
  const registerHandler = async (email, password) => {
    const userData = await _register();

    if (!userData) {
      throw new ClientError.BadRequest("Bad request");
    }

    setAccessToken(userData.accessTkn);
    setUsername(userData.email);
    setIsActivatedAccount(userData.isActivated);
  };
  const me = async () => {
    try {
      const response = await axios.get(ME_URL);
      if (response.status == 200) {
        const userData = new UserDto(response.data);
        return {
          accessTkn: userData.accessTkn,
          isActivated: userData.isActivated,
          email: userData.email,
        };
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };
  useEffect(() => {
    const ACCESS_TOKEN = getAccessTokenFromLocalStorage();

    if (ACCESS_TOKEN) {
      (async () => {
        let userData = await me();
        if (!userData) {
          userData = await refresh();
        } else if (!userData) {
          await logoutHandler();
        } else {
          setAccessToken(ACCESS_TOKEN);
          setIsActivatedAccount(userData.isActivated);
          setUsername(userData.email);
        }
      })();
    }
  }, []);
  useEffect(() => {
    if (accessToken || isActivatedAccount) {
      setAccessed(true);
    } else {
      setAccessed(false);
    }
  }, [accessToken, isActivatedAccount]);
  useEffect(() => {
    setUserData({ accessToken, username, isActivatedAccount, accesed });
  }, [accessToken, username, isActivatedAccount, accesed]);
  useEffect(() => {
    setAccessTokenToLocalStorage(accessToken);
  }, [accessToken]);

  return (
    <Context.Provider
      value={{ loginHandler, logoutHandler, registerHandler, userData }}
    >
      {children}
    </Context.Provider>
  );
}
