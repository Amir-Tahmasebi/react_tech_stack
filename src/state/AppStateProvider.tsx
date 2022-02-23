import { useReducer } from "react";
import AppContext from "./AppContext";
import initState from "./initState";
import reducer from "./reducer";

type StateProviderProps = {
  children: React.ReactNode;
};

export default function AppStateProvider({ children }: StateProviderProps) {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
