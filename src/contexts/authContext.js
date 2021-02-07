import React, { useState, createContext, useEffect } from "react";

const AuthContext = createContext({ token: "", user: {} });

function AuthContextComponent(props) {
  const [hackatangaUser, setHackatangaUser] = useState({ token: "", user: {} });

  useEffect(() => {
    const storedUser = localStorage.getItem("hackatangaUser");

    const parsedStoredUser = JSON.parse(storedUser || '""');

    if (parsedStoredUser.user) {
      setHackatangaUser({ ...parsedStoredUser });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ hackatangaUser, setHackatangaUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContextComponent, AuthContext };
