import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("JSON Web Token"));
  const [userData, setUserData] = useState("");

  const storeTokenInLS = (jwtToken) => {
    console.log(jwtToken);
    setToken(jwtToken);
    // console.log(token);
    return localStorage.setItem("JSON Web Token", jwtToken);
  };

  let isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    // console.log(isLoggedIn);
    return localStorage.removeItem("JSON Web Token");
  };


  const userAuthentication = async () => {
    try {
      // const jwt = localStorage.getItem('JSON Web Token')
      // console.log(jwt);
      // console.log("token is ",token)
      const response = await fetch(`http://localhost:3000/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const user_data = await response.json();
        setUserData(user_data.userData);
        // console.log("userData", user_data.userData);
      }else{
        console.log(response.json());
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        userAuthentication,
        userData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of AuthProvider");
  }
  return authContextValue;
};
