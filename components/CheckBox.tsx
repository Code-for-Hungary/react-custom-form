const CheckBox = ({ isChecked, onClick, ...rest }) => {
  return (
    <input type="checkbox" checked={isChecked} onClick={onClick} {...rest} />
  )
}

export default CheckBox
