import { createContext, useContext, useState } from "react";
import Profile from "../pages/Profile";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState({
     name: "Rudraksh",
  email: "rudraksh@gmail.com",
  phone: "9876543210",
  address: "Sie, Uttar Pradesh"
  });

  return (
    <UserContext.Provider value={{ profile, setProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);