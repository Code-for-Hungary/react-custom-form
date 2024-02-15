const TextInput = ({
   onClick = () => null,
   error = null,
   value = '',
   ...rest
}) => {
  return (
    <label>
      <input onClick={onClick} value={value} {...rest} />
      {error && <div className="text-red-600">{error}</div>}
    </label>
  )
}

export default TextInput
