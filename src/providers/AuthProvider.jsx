import { useState, createContext } from "react";
import { PropTypes } from "prop-types";

export const AuthContext = createContext({
  id: "",
  name: "",
  lastname: "",
  email: "",
});

const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
  });

  const login = async (email, password) => {
    const response = await fetch("http://localhost:3000/login", {
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
        });
      });
      return null;
    }
    return null;
  };

  const checkProfile = async () => {
    const response = await fetch("http://localhost:3000/profile", {
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
        });
      });
      return null;
    }
    return null;
  };

  const logout = async () => {
    await fetch("http://localhost:3000/logout", {
      credentials: "include",
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => {
        setUserInfo(null);
      });
  };

  // useEffect(() => {
  //   checkProfile();
  // }, []);

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        userInfo,
        setUserInfo,
        login,
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
