'use client'
import {useReducer, useState} from "react";
import Select from "@/components/Select";
import TextInput from "@/components/TextInput";
import CheckBox from "@/components/CheckBox";
import SummaryTable from "@/components/SummaryTable";
import {act} from "react-dom/test-utils";

export default function Home() {
  const initialState = {
    inp1: '',
    inp2: '',
    sel1: '',
    cb1: false,
    cb2: false,
    cb3: false
  }
  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_TEXT': return {
        ...state,
        [action.payload.name]: action.payload.value
      }

      case 'SET_SELECT': return {
        ...state,
        [action.payload.name]: action.payload.value
      }

      case 'TOGGLE_CHECKBOX': return {
        ...state,
        [action.payload.name]: !state[action.payload.name]
      }

      default: return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleInputChange = ({ target }) => {
    dispatch({
      type: 'SET_TEXT',
      payload: { name: target.name, value: target.value }
    })
  }

  const handleSelectChange = ({ target }) => {
    dispatch({
      type: 'SET_SELECT',
      payload: { name: target.name, value: target.value }
    })
  }

  const handleCheckboxClick = ({ target }) => {
    dispatch({
      type: 'TOGGLE_CHECKBOX',
      payload: { name: target.name }
    })
  }

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
          options={[
            { id: 1, value: '1st', label: 'First'},
            { id: 2, value: '2nd', label: 'Second'},
            { id: 3, value: '3rd', label: 'Third'},
          ]}
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
