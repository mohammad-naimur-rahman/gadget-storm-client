import DLayout from '@/components/common/Layout/DLayout'
import { InputGrp, InputGrpN } from '@/components/common/utils/InputGrp'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'semantic-ui-react'
import Data from '@/data/categories.json'
import { handleAddVariant, handleVariant, showConditionaly } from '@/helpers/dashboard/add-product-helpers'
import { FaPlus } from 'react-icons/fa'

const AddProductPage = ({ data }) => {
  const [category, setcategory] = useState('smartPhone')
  const [variants, setvariants] = useState([])
  const [preview, setpreview] = useState({})
  console.log(category)
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => console.log(data)

  const showPreview = () => {
    const values = getValues()
    setpreview(values, { category }, { variants })
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
          {variants && <h3 className="ms-2">Variants</h3>}
          {variants?.map((variant, i) => (
            <div key={variant.id} className="d-flex flex-column p-3 mx-1 my-4 shadow shadow-lg">
              <h3>
                <i>Variant {i + 1}</i>
              </h3>
              <InputGrpN
                name="ram"
                label="Ram"
                placeholder="Ram (in GB)"
                required={true}
                onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                value={variant.ram}
                type="number"
              />
              <InputGrpN
                name="rom"
                label="Rom"
                placeholder="Rom (in GB)"
                onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                value={variant.rom}
                type="number"
              />
              <InputGrpN
                name="storage"
                label="Storage"
                placeholder="Storage"
                onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                value={variant.storage}
                type="number"
              />
              <InputGrpN
                name="storageUnit"
                label="Storage Uni"
                placeholder="Unit (GB, TB, etc)"
                onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                value={variant.storageUnit}
                type="number"
              />
              <InputGrpN
                name="size"
                label="Size"
                placeholder="Size"
                onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                value={variant.size}
                type="number"
              />
              <InputGrpN
                name="sizeUnit"
                label="Size Unit"
                placeholder="Unit (inch, cm, etc)"
                onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                value={variant.sizeUnit}
              />
              <InputGrpN
                name="basePrice"
                label="Base Price"
                placeholder="Base Price"
                required={true}
                onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                value={variant.basePrice}
                type="number"
              />
              <InputGrpN
                name="discount"
                label="Discount"
                placeholder="Discount (in dollars or %)"
                onChange={(e) => handleVariant(variants, setvariants, e, variant.id)}
                value={variant.discount}
              />
            </div>
          ))}
          {showConditionaly(category, ['smartPhone', 'laptop', 'tablet']) && (
            <Button onClick={() => handleAddVariant(variants, setvariants)} secondary className="d-block my-3">
              <FaPlus /> Add a variant
            </Button>
          )}
          <div className="d-flex">
            <Button onClick={showPreview} secondary>
              Show Preview
            </Button>
            <Button type="submit" primary className="d-block my-3">
              Add Product
            </Button>
          </div>
        </form>
        <div className="preview">
          {Object.keys(preview).length > 0 && <div className="p-5 m-5 shadow shadow-lg">{JSON.stringify(preview)}</div>}
        </div>
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
