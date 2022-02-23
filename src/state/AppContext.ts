import React, { createContext } from "react";
import StateType from "./State.type";


type ContextType = {
    state : StateType
    dispatch : React.Dispatch<any>
}


const AppContext = createContext<ContextType>({} as ContextType)

export default AppContext;