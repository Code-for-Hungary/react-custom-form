'use client'
import {useState} from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('1st')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Next form page</h1>

        <input
          type="text" onChange={({ target }) => setInputValue(target.value)}
          value={inputValue}
        />

        <select
          onChange={({ target }) => setSelectValue(target.value)}
          value={selectValue}
          >
          <option value="1st">First</option>
          <option value="2nd">Second</option>
          <option value="3rd">Third</option>
        </select>

      <input type="checkbox" />

      <h2>Values</h2>
      <table>
        <tbody>
        <tr>
          <td>input value:</td>
          <td>{inputValue}</td>
        </tr>
        <tr>
          <td>select value:</td>
          <td>{selectValue}</td>
        </tr>
        </tbody>
      </table>
    </main>
  );
}
