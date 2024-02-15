'use client'

import { Context, createContext } from "react";

export const GlobalStateContext: Context<{ state: { foo?: string }}> = createContext({ state: {} })
const GlobalStateProvider = ({ children }) => {
  return (
    <GlobalStateContext.Provider value={{ state: { foo: 'bar' } }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalStateProvider
