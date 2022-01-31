export const InputGrp = ({
  name,
  label,
  required = false,
  register,
  defaultValue = '',
  errors,
  placeholder,
  type = 'text'
}) => {
  return (
    <div className="d-flex flex-column mb-3">
      <div className="d-flex">
        <label htmlFor={name}>
          {label}
          {required ? '*' : ''} <span>&nbsp;</span> :
        </label>
        <input
          type={type}
          id={name}
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...register(name, { required })}
        />
      </div>
      {errors[name] && <p className="text-danger small py-2">{name} is a required field*</p>}
    </div>
  )
}

export const InputGrpN = ({ name, label, required = false, placeholder, onChange, value, type = 'text' }) => {
  return (
    <div className="d-flex mb-3">
      <label htmlFor={name}>
        {label}
        {required ? '*' : ''} <span>&nbsp;</span> :
      </label>
      <input type={type} placeholder={placeholder} required={required} value={value} onChange={onChange} name={name} />
    </div>
  )
}
