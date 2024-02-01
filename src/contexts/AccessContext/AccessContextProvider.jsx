import React, { useEffect, useState } from "react";
import Context from "./AccessContext";
import ClientError from "../../exeptions/client-error";
import UserDto from "../../dtos/user-dto";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
  "/registration";
const ME_URL =
  process.env.REACT_APP_API_URL + process.env.REACT_APP_API_BASE_PATH + "/me";
export default function AccessContextProvider({ children }) {
  const [accessToken, setAccessToken] = useState(undefined);
  const [username, setUsername] = useState(undefined);
  const [isActivatedAccount, setIsActivatedAccount] = useState(false);
  const [privateKey, setPrivateKey] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const navigate = useNavigate();

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
    /*
     * refresh access token if refreshTkn in cookies
     */

    try {
      const response = await axios.get(REFRESH_URL);
      if (response.status === 200) {
        const userData = new UserDto(response.data);
        return { ...userData };
      }
      return null;
    } catch (error) {
      return null;
    }
  };
  const _logout = async () => {
    const response = await axios.post(LOGOUT_URL);
    if (response.status === 200) {
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

      const userData = new UserDto(response.data);
      return { ...userData };
    } catch (error) {
      toast.error(error.response.data.message);
      return null;
    }
  };
  const loginHandler = async (email, password) => {
    /*
     * login
     */

    const userData = await _login(email, password);

    if (!userData) {
      return 1;
    }

    setAccessToken(userData.accessTkn);
    setUsername(userData.email);
    setIsActivatedAccount(userData.isActivated);
    setPassword(password);
    setPrivateKey(userData.privateKey);
    toast(`Login as ${userData.email}`);
    return 0;
  };
  const _register = async (email, password) => {
    try {
      const response = await axios.post(REGISTER_URL, { email, password });

      const userData = new UserDto(response.data);
      return { ...userData };
    } catch (error) {
      toast.error(error.response.data.message);
      return null;
    }
  };
  const registerHandler = async (email, password) => {
    /*
     * register new user
     */

    const userData = await _register(email, password);

    if (!userData) {
      throw new ClientError.BadRequest("Bad request");
    }

    setAccessToken(userData.accessTkn);
    setUsername(userData.email);
    setIsActivatedAccount(userData.isActivated);
    setPassword(password);
    setPrivateKey(userData.privateKey);

    toast.success(`Singup as ${userData.email}`);
  };
  const me = async () => {
    /*
     * get user data from server
     */
    try {
      const response = await axios.get(ME_URL);
      if (response.status === 200) {
        const userData = new UserDto(response.data);
        return { ...userData };
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };
  useEffect(() => {
    /*
     * restore user access on load
     */
    const ACCESS_TOKEN = getAccessTokenFromLocalStorage();

    if (ACCESS_TOKEN) {
      (async () => {
        let userData = await me();
        if (userData) {
          setAccessToken(ACCESS_TOKEN);
          setIsActivatedAccount(userData.isActivated);
          setUsername(userData.email);
        } else if (Cookies.get("Refresh-Token")) {
          await refresh();
        }
      })();
    }
  }, []);
  useEffect(() => {
    /*
     * navigate user if access confirmed
     */
    if (accessToken) {
      navigate("/wallet");
    } else {
      navigate("/login");
    }
  }, [accessToken]);

  useEffect(() => {
    /*
     * append user info
     */
    setUserData({
      accessToken,
      username,
      isActivatedAccount,
      password,
      privateKey,
    });
  }, [accessToken, username, isActivatedAccount]);

  useEffect(() => {
    /*
     * save user access token locally
     */
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
