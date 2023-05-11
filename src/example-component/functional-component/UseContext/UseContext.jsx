import React, { useState, createContext } from "react";
import Login from "./Login.jsx"
import User from "./User.jsx";

export const AppContext = createContext(null);

function ContextTutorial() {
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextTutorial;