const Input = ({ label, ...props }) => {
  return (
    <label className="input-wrap">
      {label && <span>{label}</span>}
      <input {...props} />
    </label>
  )
}

export default Input
