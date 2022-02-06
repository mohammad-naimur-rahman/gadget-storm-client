export const InputGrp = ({
  name,
  label,
  required = false,
  register,
  defaultValue = '',
  errors,
  placeholder,
  type = 'text',
  accept,
  multiple,
  description,
  autoFocus
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
          accept={accept}
          multiple={multiple}
          {...register(name, { required })}
          autoFocus={autoFocus}
        />
      </div>
      {description && (
        <p className="text-secondary">
          <i>{description}</i>
        </p>
      )}
      {errors[name] && (
        <p className="text-danger small py-2">
          {name.charAt(0).toUpperCase() + name.substr(1).toLowerCase()} is a required field*
        </p>
      )}
    </div>
  )
}

export const InputGrpN = ({
  name,
  label,
  required = false,
  placeholder,
  onChange,
  value,
  type = 'text',
  accept,
  multiple,
  description
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
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          name={name}
          accept={accept}
          multiple={multiple}
        />
      </div>
      {description && (
        <p className="text-secondary">
          <i>{description}</i>
        </p>
      )}
    </div>
  )
}

export const InputSelect = ({ label, name, getter, setter, children }) => {
  return (
    <div className="d-flex mb-3">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={getter} onChange={(e) => setter(e.target.value)}>
        {children}
      </select>
    </div>
  )
}
