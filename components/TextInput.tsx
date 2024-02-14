const TextInput = ({ onClick = () => null, value = '', ...rest }) => {
  return (
    <input onClick={onClick} value={value} {...rest} />
  )
}

export default TextInput
