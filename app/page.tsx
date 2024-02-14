'use client'
import {useState} from "react";
import Select from "@/components/Select";
import TextInput from "@/components/TextInput";
import CheckBox from "@/components/CheckBox";
import SummaryTable from "@/components/SummaryTable";

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [input2Value, setInput2Value] = useState('')
  const [selectValue, setSelectValue] = useState()
  const [checkState, setCheckState] = useState({
    cb1: false,
    cb2: false,
    cb3: false
  })

  const toggleCheckbox = ({ target }) => {
    setCheckState(prev => ({
      ...prev,
      [target.name]: !prev[target.name]
    }))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Next form page</h1>

        <TextInput
          type="text" onChange={({ target }) => setInputValue(target.value)}
          value={inputValue}
        />

        <TextInput
          type="text" onChange={({ target }) => setInput2Value(target.value)}
          value={input2Value}
        />

        <Select
          onChange={({ target }) => setSelectValue(target.value)}
          value={selectValue}
          options={[
            { id: 1, value: '1st', label: 'First'},
            { id: 2, value: '2nd', label: 'Second'},
            { id: 3, value: '3rd', label: 'Third'},
          ]}
          >
        </Select>

      <CheckBox name="cb1" isChecked={checkState.cb1} onClick={toggleCheckbox} />
      <CheckBox name="cb2" isChecked={checkState.cb2} onClick={toggleCheckbox} />
      <CheckBox name="cb3" isChecked={checkState.cb3} onClick={toggleCheckbox} />

      <SummaryTable
        checkState={checkState}
        selectValue={selectValue}
        inputValue={inputValue}
        input2Value={input2Value}
      />
    </main>
  );
}
