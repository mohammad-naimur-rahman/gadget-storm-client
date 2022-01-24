import DLayout from '@/components/shared/DLayout'
import React, { useState } from 'react'
import categories from '@/data/categories.json'
import { useForm } from 'react-hook-form'

const InputGrp = ({ label, type, name, required = false, errMsg, placeholder, errors, register }) => {
  return (
    <div className="pt-3 pb-2 input-grp">
      <h5>{label}</h5>
      <input
        className="input"
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
      <h3 className="p-2 text-center">Add a product</h3>
      <form className="add-product-form" onSubmit={handleSubmit(onSubmit)}>
        <h5>Select Category</h5>
        <select onChange={(e) => setCategory(e.target.value)} className="input-grp">
          {categories.map((category) => (
            <option key={category.category} value={category.value}>
              {category.category}
            </option>
          ))}
        </select>
        <InputGrp
          register={register}
          errors={errors}
          label="Product Name"
          name="name"
          type="text"
          required={true}
          errMsg="Name is a required field"
          placeholder="Product Name"
        />

        <InputGrp
          register={register}
          errors={errors}
          label="Brand Name"
          name="brand"
          type="text"
          required={true}
          errMsg="Brand is a required field"
          placeholder="Brand Name"
        />

        <h4>Add variants</h4>
        <button className="btn btn-secondary">
          <i className="fa fa-plus-circle"></i> Add a new variant
        </button>

        <button className="button mt-2" type="submit">
          Add a product
        </button>
      </form>
    </DLayout>
  )
}

export default AddProduct
