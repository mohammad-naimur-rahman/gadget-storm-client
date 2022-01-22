import DLayout from '@/components/shared/DLayout'
import React, { useState } from 'react'
import categories from '@/data/categories.json'
import { useForm } from 'react-hook-form'

const InputGrp = ({ label, type, name, required = false, errMsg, placeholder, errors, register }) => {
  return (
    <div className="py-3">
      <h5>{label}</h5>
      <input
        className="form-control"
        name={name}
        type={type}
        ref={register({ required: required })}
        placeholder={placeholder}
      />
      {errors[name] && <p className="text-danger small py-2">{errMsg}</p>}
    </div>
  )
}

const AddProduct = () => {
  const [category, setCategory] = useState('smartPhone')
  console.log(category)

  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <DLayout>
      <h3 className="p-2">Add a product</h3>
      <form className="add-product-form" onSubmit={handleSubmit(onSubmit)}>
        <h5>Select Category</h5>
        <select onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category) => (
            <option key={category.category} value={category.value}>
              {category.category}
            </option>
          ))}
        </select>
        <InputGrp
          label="Product Name"
          name="name"
          type="text"
          required={true}
          errMsg="Name is a required field"
          placeholder="Product Name"
          register={register}
          errors={errors}
        />

        <button className="btn btn-primary mt-2" type="submit">
          Add a product
        </button>
      </form>
    </DLayout>
  )
}

export default AddProduct
