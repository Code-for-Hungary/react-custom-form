'use client'
import {useContext} from "react";
import {GlobalStateContext} from "@/providers/GlobalState";

const SummaryPage = () => {
  const { state } = useContext(GlobalStateContext)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Summary page</h1>
      <p>{state.foo}</p>
    </main>
  )
}

export default SummaryPage
