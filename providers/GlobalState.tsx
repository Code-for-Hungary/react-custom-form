// @ts-nocheck
'use client'

import {Context, createContext, useReducer} from "react";
import {FormInitialState, formInitialState, formReducer} from "@/hooks/useForm";

export const GlobalStateContext: Context<{ state: FormInitialState, dispatch: (action:{ type: string, payload?: any }) => void }> = createContext({ state: {}, dispatch: ({ type: _, payload: __ }) => null })

const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(formReducer, formInitialState)

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalStateProvider
