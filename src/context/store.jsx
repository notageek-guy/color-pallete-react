import { createContext, useContext } from "react";
import { colorPalleteList as palleteList } from "../color-pallete";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{palleteList}}>{children}</AppContext.Provider>;
};



export const useStore = () => useContext(AppContext);