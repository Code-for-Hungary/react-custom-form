const Select = ({ value = 'DEFAULT', onChange = ({ target: _ }) => null, options = [], ...rest }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      {...rest}
    >
      <option value="DEFAULT" disabled>Select something</option>
      {options.map(({ id, value, label }) => (
        <option key={id} value={value}>{label}</option>
      ))}
    </select>
  )
}

export default Select
