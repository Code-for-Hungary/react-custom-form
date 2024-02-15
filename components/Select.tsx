
export const DEFAULT_SELECT_VALUE = 'DEFAULT_SELECT_VALUE'

const Select = ({ value = DEFAULT_SELECT_VALUE, onChange = ({ target: _ }) => null, options = [], ...rest }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      {...rest}
    >
      <option value={DEFAULT_SELECT_VALUE} disabled>Select something</option>
      {options.map(({ id, value, label }) => (
        <option key={id} value={value}>{label}</option>
      ))}
    </select>
  )
}

export default Select
