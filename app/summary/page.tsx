'use client'
import SummaryTable from "@/components/SummaryTable";
import Link from "next/link";
import useForm from "@/hooks/useForm";

const SummaryPage = () => {
  const { state, handleSubmit} = useForm()

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
      <button
        disabled={state.isSubmitting}
        onClick={handleSubmit}
        className={`bg-gray-300 p-3 rounded hover:bg-gray-400${state.isSubmitting ? ' opacity-60' : ''}`}>
        {state.isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </main>
  )
}

export default SummaryPage
