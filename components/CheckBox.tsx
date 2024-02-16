const CheckBox = ({ isChecked, onChange, ...rest }) => {
  return (
    <input type="checkbox" checked={isChecked} onChange={onChange} {...rest} />
  )
}

export default CheckBox
