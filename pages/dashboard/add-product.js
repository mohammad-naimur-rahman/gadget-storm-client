import DLayout from '@/components/shared/DLayout'
import React, { useState } from 'react'
import categories from '@/data/categories.json'
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'

const InputGrp = ({ label, type, name, required = false, errMsg, placeholder, errors, register, onChange }) => {
  return (
    <div className="pt-3 pb-2 input-grp">
      <h5>{label}</h5>
      <input
        className="input"
        name={name}
        type={type}
        ref={register({ required: required })}
        placeholder={placeholder}
        onChange={onChange}
      />
      {errors[name] && <p className="text-danger small py-2">{errMsg}</p>}
    </div>
  )
}

const InputGrpVariant = ({ label, type, name, required = false, placeholder, value, onChange }) => {
  return (
    <div className="pb-3 input-grp">
      <h5>{label}</h5>
      <input
        className="input"
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required={required}
      />
    </div>
  )
}

const AddProduct = () => {
  const [category, setCategory] = useState('smartPhone')
  const [variants, setvariants] = useState([])
  console.log(category)
  const { register, handleSubmit, errors } = useForm()

  const handleAddVariant = () => {
    setvariants([
      ...variants,
      {
        id: uuid(),
        ram: '',
        rom: '',
        price: '',
        size: '',
        sizeUnit: '',
        withoutDiscount: ''
      }
    ])
    console.log(variants)
  }

  const handleVariant = (e, id) => {
    const newInputFields = variants.map((i) => {
      if (id === i.id) {
        i[e.target.name] = e.target.value
      }
      return i
    })

    setvariants(newInputFields)
  }

  const handleDeleteVariant = (id) => {
    const values = [...variants]
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    )
    setvariants(values)
  }

  const onSubmit = (data) => console.log(data)

  const showConditionaly = (forShow) => {
    const arr = forShow.map((each) => category === each)
    return arr.find((el) => el === true) ? true : false
  }
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
        {showConditionaly(['smartPhone', 'tablet', 'laptop']) && <h4>Add variants</h4>}
        {variants &&
          variants.map((variant) => (
            <div className="p-1 mb-2 border border-1 w-auto" key={variant.id}>
              <InputGrpVariant
                label="Ram"
                name="ram"
                type="number"
                placeholder="Ram (in GB)"
                value={variant.ram}
                onChange={(e) => handleVariant(e, variant.id)}
              />
              {showConditionaly(['smartPhone', 'tablet']) && (
                <InputGrpVariant
                  label="Rom"
                  name="rom"
                  type="number"
                  placeholder="Rom (in GB)"
                  value={variant.rom}
                  onChange={(e) => handleVariant(e, variant.id)}
                />
              )}
              {showConditionaly(['laptop']) && (
                <>
                  <InputGrpVariant
                    label="Size"
                    name="size"
                    type="number"
                    placeholder="Size"
                    value={variant.size}
                    onChange={(e) => handleVariant(e, variant.id)}
                  />
                  <InputGrpVariant
                    label="Size Unit"
                    name="sizeUnit"
                    type="text"
                    placeholder="Size Unit (inch, cm etc)"
                    value={variant.sizeUnit}
                    onChange={(e) => handleVariant(e, variant.id)}
                  />
                  <InputGrpVariant
                    label="Storage"
                    name="storage"
                    type="number"
                    placeholder="Storage"
                    value={variant.storage}
                    onChange={(e) => handleVariant(e, variant.id)}
                  />
                  <InputGrpVariant
                    label="Storage Unit"
                    name="sizeUnit"
                    type="text"
                    placeholder="Storage Unit (GB, TB etc)"
                    value={variant.storageUnit}
                    onChange={(e) => handleVariant(e, variant.id)}
                  />
                </>
              )}
              <InputGrpVariant
                label="Base Price"
                name="basePrice"
                type="number"
                placeholder="Base Price"
                value={variant.basePrice}
                onChange={(e) => handleVariant(e, variant.id)}
              />
              <InputGrpVariant
                label="Discount"
                name="discount"
                type="text"
                placeholder="discount"
                value={variant.discount}
                onChange={(e) => handleVariant(e, variant.id)}
              />
              <h5>Final Price</h5>
              <p>{variant.price}</p>
              <button className="btn btn-danger" onClick={() => handleDeleteVariant(variant.id)}>
                <i className="fa fa-times me-2"></i>Delete Variant
              </button>
            </div>
          ))}
        {showConditionaly(['smartPhone', 'tablet', 'laptop']) && (
          <button className="btn btn-secondary" onClick={handleAddVariant}>
            <i className="fa fa-plus-circle"></i> Add a new variant
          </button>
        )}
        <button className="button mt-2" type="submit">
          Add a product
        </button>
      </form>
    </DLayout>
  )
}

export default AddProduct
