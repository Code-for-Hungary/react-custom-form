'use client'
import Select from "@/components/Select";
import TextInput from "@/components/TextInput";
import CheckBox from "@/components/CheckBox";
import useForm from "@/hooks/useForm";
import Link from "next/link";
import useValidation from "@/hooks/useValidation";

export default function Home() {
  const {
    state,
    handleInputChange,
    handleSelectChange,
    handleCheckboxClick
  } = useForm()

  const { errors } = useValidation({
    inp1: (value, state) => state.cb1 && !value ? 'Required if cb 1 checked' : null,
    inp2: value => value && value.length < 3 ? 'Too short' : null
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Next form page</h1>

        <TextInput
          name="inp1"
          error={errors.inp1}
          onChange={handleInputChange}
          value={state.inp1}
        />

        <TextInput
          name="inp2"
          error={errors.inp2}
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

      <Link href="/summary">Next</Link>
    </main>
  );
}
