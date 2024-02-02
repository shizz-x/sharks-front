import React, { useEffect, useState } from "react";
import Context from "./AccessContext";
import ClientError from "../../exeptions/client-error";
import UserDto from "../../dtos/user-dto";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import TokenDto from "../../dtos/token-dto";
// const REFRESH_URL =
//   process.env.REACT_APP_API_URL +
//   process.env.REACT_APP_API_BASE_PATH +
//   "/refresh";
// const LOGIN_URL =
//   process.env.REACT_APP_API_URL +
//   process.env.REACT_APP_API_BASE_PATH +
//   "/login";
// const LOGOUT_URL =
//   process.env.REACT_APP_API_URL +
//   process.env.REACT_APP_API_BASE_PATH +
//   "/logout";
// const REGISTER_URL =
//   process.env.REACT_APP_API_URL +
//   process.env.REACT_APP_API_BASE_PATH +
//   "/registration";
// const ASSETS_URL =
//   process.env.REACT_APP_API_URL +
//   process.env.REACT_APP_API_BASE_PATH +
//   "/assets";
// const ME_URL =
//   process.env.REACT_APP_API_URL + process.env.REACT_APP_API_BASE_PATH + "/me";
const REFRESH_URL = "https://gogi.meme/api" + "/refresh";
const LOGIN_URL = "https://gogi.meme/api" + "/login";
const LOGOUT_URL = "https://gogi.meme/api" + "/logout";
const REGISTER_URL = "https://gogi.meme/api" + "/registration";
const ASSETS_URL = "https://gogi.meme/api" + "/assets";
const ME_URL = "https://gogi.meme/api" + "/me";
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

    const _refresh = async () => {
      try {
        const response = await axios.get(REFRESH_URL, {
          withCredentials: true,
        });
        const userData = new UserDto(response.data);

        return { ...userData };
      } catch (error) {
        toast.error(error.response.data.message);
        return null;
      }
    };

    const userData = await _refresh();

    if (userData) {
      setAccessTokenToLocalStorage(userData.accessTkn);
    }
    window.location.reload();
  };

  const avaliableTokensHandler = async () => {
    const _avaliableTokens = async () => {
      try {
        const response = await axios.get(ASSETS_URL, { withCredentials: true });

        return TokenDto.createArray(response);
      } catch (error) {
        toast.error(error.response.data.message);
        return null;
      }
    };
    const avaliableTokens = await _avaliableTokens();

    if (!avaliableTokens) {
      return null;
    }

    return avaliableTokens;
  };
  const logoutHandler = async () => {
    const _logout = async () => {
      try {
        const response = await axios.post(LOGOUT_URL, {
          withCredentials: true,
        });

        return true;
      } catch (error) {
        return null;
      }
    };
    const response = await _logout();
    if (response) {
      localStorage.removeItem("Access-Token");
    }
    window.location.reload();
  };
  const loginHandler = async (email, password) => {
    /*
     * login
     */

    const _login = async (email, password) => {
      try {
        const response = await axios.post(
          LOGIN_URL,
          { email, password },
          { withCredentials: true }
        );

        const userData = new UserDto(response.data);
        return { ...userData };
      } catch (error) {
        toast.error(error.response.data.message);
        return null;
      }
    };

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
  const registerHandler = async (email, password) => {
    /*
     * register new user
     */
    const _register = async (email, password) => {
      try {
        const response = await axios.post(
          REGISTER_URL,
          { email, password },
          { withCredentials: true }
        );

        const userData = new UserDto(response.data);
        return { ...userData };
      } catch (error) {
        toast.error(error.response.data.message);
        return null;
      }
    };

    const userData = await _register(email, password);

    if (!userData) {
      return;
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
    const _me = async () => {
      try {
        const response = await axios.get(ME_URL, { withCredentials: true });

        const userData = new UserDto(response.data);
        return { ...userData };
      } catch (error) {
        toast.error(error.response.data.message);
        return null;
      }
    };

    const userData = await _me();

    return userData;
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
      value={{
        loginHandler,
        logoutHandler,
        registerHandler,
        avaliableTokensHandler,
        userData,
      }}
    >
      {children}
    </Context.Provider>
  );
}
