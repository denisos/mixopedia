import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

function UserProvider(props) {
  const [user, setUser] = useState({ name: "" });
  // regenerate is user changes
  const value = React.useMemo(() => [user, setUser], [user]);
  // const value = [user, setUser];
  return <UserContext.Provider value={value} {...props} />
}

export { UserProvider, useUser };
