import DLayout from '@/components/common/Layout/DLayout'
import InputGrp from '@/components/common/utils/InputGrp'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input } from 'semantic-ui-react'

const AddProductPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <DLayout>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex mb-3">
          <label htmlFor="category">Choose Category</label>
          <select {...register('category')}>
            <option value="smartPhone">Smartphone</option>
            <option value="tablet">Tablet</option>
            <option value="laptop">Laptop</option>
          </select>
        </div>
        <InputGrp
          register={register}
          errors={errors}
          name="name"
          label="Product Name"
          required={true}
          placeholder="Product Name"
        />
        <Button type="submit" primary>
          Add Product
        </Button>
      </form>
    </DLayout>
  )
}

export default AddProductPage
