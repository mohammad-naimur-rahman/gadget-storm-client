import React from 'react'

const InputGrp = ({ name, label, required = false, register, defaultValue = '', errors, placeholder }) => {
  return (
    <div className="d-flex flex-column mb-3">
      <div className="d-flex">
        <label htmlFor={name}>
          {label}
          {required ? '*' : ''} <span>&nbsp;</span> :
        </label>
        <input id={name} defaultValue={defaultValue} placeholder={placeholder} {...register(name, { required })} />
      </div>
      {errors[name] && <p className="text-danger small py-2">{name} is a required field*</p>}
    </div>
  )
}

export default InputGrp
