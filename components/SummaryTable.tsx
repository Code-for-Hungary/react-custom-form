const SummaryTable = ({ inputValue, input2Value, selectValue, checkState }) => {
  return (
    <>
      <h2>Values</h2>
      <table>
        <tbody>
        <tr>
          <td>input value:</td>
          <td>{inputValue} {input2Value}</td>
        </tr>
        <tr>
          <td>select value:</td>
          <td>{selectValue}</td>
        </tr>
        <tr>
          <td>checkbox value:</td>
          <td>
            {checkState.cb1 ? '◼︎' : '◻︎' }
            {checkState.cb2 ? '◼︎' : '◻︎' }
            {checkState.cb3 ? '◼︎' : '◻︎' }
          </td>
        </tr>
        </tbody>
      </table>
    </>
  )
}

export default SummaryTable
