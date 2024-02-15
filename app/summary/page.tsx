'use client'
import {useContext} from "react";
import { GlobalStateContext } from "@/providers/GlobalState";
import SummaryTable from "@/components/SummaryTable";
import Link from "next/link";

const SummaryPage = () => {
  const { state } = useContext(GlobalStateContext)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Summary page</h1>
      <SummaryTable
        checkState={state}
        selectValue={state.sel1}
        inputValue={state.inp1}
        input2Value={state.inp2}
      />
      <Link href="/">Back</Link>
    </main>
  )
}

export default SummaryPage
