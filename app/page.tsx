'use client'
import Select from "@/components/Select";
import TextInput from "@/components/TextInput";
import CheckBox from "@/components/CheckBox";
import SummaryTable from "@/components/SummaryTable";
import useForm from "@/hooks/useForm";

export default function Home() {
  const {
    state,
    handleInputChange,
    handleSelectChange,
    handleCheckboxClick
  } = useForm()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Next form page</h1>

        <TextInput
          type="text"
          name="inp1"
          onChange={handleInputChange}
          value={state.inp1}
        />

        <TextInput
          type="text"
          name="inp2"
          onChange={handleInputChange}
          value={state.inp2}
        />

        <Select
          name="sel1"
          onChange={handleSelectChange}
          value={state.sel1}
          options={state.sel1options}
          >
        </Select>

      <CheckBox name="cb1" isChecked={state.cb1} onClick={handleCheckboxClick} />
      <CheckBox name="cb2" isChecked={state.cb2} onClick={handleCheckboxClick} />
      <CheckBox name="cb3" isChecked={state.cb3} onClick={handleCheckboxClick} />

      <SummaryTable
        checkState={state}
        selectValue={state.s1}
        inputValue={state.inp1}
        input2Value={state.inp2}
      />
    </main>
  );
}
