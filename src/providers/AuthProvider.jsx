import { useState, createContext, useEffect } from "react";
import { PropTypes } from "prop-types";

const defaultUserInfo = {
  id: "",
  name: "",
  lastname: "",
  email: "",
  role: "",
};

export const AuthContext = createContext(defaultUserInfo);

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(defaultUserInfo);

  const register = async (userValues) => {
    const response = await fetch(`${API_ENDPOINT}/register`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userValues.name,
        lastname: userValues.lastname,
        email: userValues.email,
        password: userValues.password,
      }),
    });
    if (response.status === 409) {
      return response.json();
    }
    if (response.status === 200) {
      response.json().then((data) => {
        setUserInfo({
          id: data.id,
          name: data.name,
          lastname: data.lastname,
          email: data.email,
          role: data.role,
        });
      });
    }
    return null;
  };

  const login = async (email, password) => {
    const response = await fetch(`${API_ENDPOINT}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (response.status === 401) {
      return response.json();
    }
    if (response.status === 200) {
      response.json().then((data) => {
        setUserInfo({
          id: data.id,
          name: data.name,
          lastname: data.lastname,
          email: data.email,
          role: data.role,
        });
      });
      return null;
    }
    return null;
  };

  const checkProfile = async () => {
    const response = await fetch(`${API_ENDPOINT}/profile`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.status === 401) {
      return response.json();
    }
    if (response.status === 200) {
      response.json().then((data) => {
        setUserInfo({
          id: data.id,
          name: data.name,
          lastname: data.lastname,
          email: data.email,
          role: data.role,
        });
      });
      return null;
    }
    return null;
  };

  const logout = async () => {
    await fetch(`${API_ENDPOINT}/logout`, {
      credentials: "include",
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => {
        setUserInfo(defaultUserInfo);
      });
  };

  useEffect(() => {
    checkProfile();
  }, []);

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        userInfo,
        login,
        register,
        logout,
        checkProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.any,
};

export default AuthProvider;
