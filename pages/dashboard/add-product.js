import DLayout from '@/components/common/Layout/DLayout'
import { InputGrp } from '@/components/common/utils/InputGrp'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'semantic-ui-react'
import Data from '@/data/categories.json'
import Variants from '@/components/pageComponents/Dashboard/AddProductPage/Variants'

const AddProductPage = ({ data }) => {
  const [category, setcategory] = useState('smartPhone')
  const [variants, setvariants] = useState([])
  const [preview, setpreview] = useState({})
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    console.log({ ...data, category, variants })
  }

  const showPreview = () => {
    const values = getValues()
    setpreview({
      ...values,
      category,
      variants
    })
  }

  return (
    <DLayout className="p-4">
      <div className="d-flex">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Add Product</h2>
          <div className="d-flex mb-3">
            <label htmlFor="category">Choose Category :</label>
            <select value={category} onChange={(e) => setcategory(e.target.value)}>
              {data?.map((item) => (
                <option value={item.sku} key={item.name}>
                  {item.name}
                </option>
              ))}
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
          <InputGrp
            register={register}
            errors={errors}
            name="brand"
            label="Brand Name"
            required={true}
            placeholder="Brand Name"
          />
          <Variants variants={variants} setvariants={setvariants} category={category} />
          <div className="d-flex align-items-center">
            <Button type="button" onClick={showPreview} color="green">
              Show Preview
            </Button>
            <Button type="submit" primary className="d-block my-3">
              Add Product
            </Button>
          </div>
        </form>
        {/* <div className="preview w-50">
          {Object.keys(preview).length > 0 && <div className="p-5 shadow shadow-lg">{JSON.stringify(preview)}</div>}
        </div> */}
      </div>
    </DLayout>
  )
}

export function getStaticProps() {
  return {
    props: {
      data: Data
    }
  }
}

export default AddProductPage
