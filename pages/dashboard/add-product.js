import DLayout from '@/components/common/Layout/DLayout'
import { InputGrp, InputGrpN } from '@/components/common/utils/InputGrp'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'semantic-ui-react'
import Data from '@/data/categories.json'
import Variants from '@/components/pageComponents/Dashboard/AddProductPage/Variants'
import ReactTooltip from 'react-tooltip'
import FrontCameraSensors from '@/components/pageComponents/Dashboard/AddProductPage/FrontCameraSensors'
import BackCameraSensors from '@/components/pageComponents/Dashboard/AddProductPage/BackCameraSensors'
import { showConditionaly } from '@/helpers/helpers'
import {
  handleAddGrp,
  handleChange,
  handleDeleteGrp,
  handleImageUpload,
  handlePrice
} from '@/helpers/dashboard/add-product-helpers'

const AddProductPage = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [category, setcategory] = useState('smartPhone')
  const [variants, setvariants] = useState([])
  const [priceSchema, setpriceSchema] = useState({
    basePrice: '',
    discount: '',
    price: 0
  })

  const [image, setimage] = useState([])
  const [descriptionImage, setdescriptionImage] = useState([])
  const [frontCamera, setfrontCamera] = useState({
    frontCameraSensors: [],
    videoCapability: ''
  })
  const [backCamera, setbackCamera] = useState({
    backCameraSensors: [],
    videoCapability: ''
  })
  const [frontCameraSensors, setfrontCameraSensors] = useState([])
  const [backCameraSensors, setbackCameraSensors] = useState([])

  const [dimensions, setdimensions] = useState({
    length: '',
    width: '',
    thickness: ''
  })

  const [display, setdisplay] = useState({
    displayType: '',
    displaySize: '',
    displayResolution: '',
    displayScreenToBodyRatio: ''
  })

  const [feature, setfeature] = useState('')
  const [features, setfeatures] = useState([])

  const onSubmit = (data) => {
    console.log({
      ...data,
      category,
      variants,
      ...priceSchema,
      images: image,
      descriptionImages: descriptionImage
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
          {showConditionaly(category, ['smartPhone', 'tablet', 'laptop']) || (
            <>
              <InputGrpN
                name="basePrice"
                label="Base Price"
                placeholder="Base Price"
                onChange={(e) => handlePrice(e, priceSchema, setpriceSchema)}
                value={priceSchema.basePrice}
                type="number"
              />
              <InputGrpN
                name="discount"
                label="Discount"
                placeholder="In dollars or %"
                onChange={(e) => handlePrice(e, priceSchema, setpriceSchema)}
                value={priceSchema.discount}
              />
              <div className="d-flex mb-3" data-for="price" data-tip="Price is calculated <br /> automatically">
                <label>Price</label>
                <p className="price">{priceSchema.price}</p>
                <ReactTooltip id="price" place="right" multiline={true} type="dark" className="bg-dark text-white" />
              </div>
            </>
          )}
          <InputGrpN
            name="images"
            label="Product Images"
            required={true}
            type="file"
            accept="image/*"
            multiple={true}
            onChange={(e) => handleImageUpload(e, 5, setimage)}
            description="Please upload potrait mode photo and you can upload up to 5 images"
          />
          <InputGrpN
            name="descriptionImages"
            label="Description Images"
            type="file"
            accept="image/*"
            multiple={true}
            onChange={(e) => handleImageUpload(e, 3, setdescriptionImage)}
            description="Please upload landscape mode photo and you can upload up to 3 images"
          />
          <div className="d-flex flex-column mb-3">
            <div className="d-flex">
              <label htmlFor="description">
                Description* <span>&nbsp;</span> :
              </label>
              <textarea
                id="description"
                cols="60"
                rows="10"
                {...register('description', { required: true })}
                placeholder="Example: Charging: wireless \n Battery: 3000mAh \n Display: 6.5 inches \n Processor: Snapdragon 855 \n RAM: 4GB \n Storage: 64GB"
              ></textarea>
            </div>
          </div>
          <h3>Features</h3>
          {features && (
            <div className="d-flex flex-wrap align-items-center">
              {features.map((feature) => (
                <p
                  key={feature}
                  className="d-flex align-items-center rounded rounded-pill ps-2 text-white m-1 pill-box"
                >
                  {feature}{' '}
                  <span
                    className="rounded rounded-circle ms-2 cross-mini-btn"
                    onClick={() => handleDeleteGrp(feature, features, setfeatures)}
                  >
                    x
                  </span>
                </p>
              ))}
            </div>
          )}
          <div className="d-flex align-items-center mt-2">
            <InputGrpN
              label="Add Features"
              placeholder="Input a feature"
              value={feature}
              onChange={(e) => setfeature(e.target.value)}
            />
            <Button
              basic
              color="green"
              type="button"
              onClick={() => handleAddGrp(feature, setfeature, features, setfeatures)}
              className="ms-3 add-mini-btn"
            >
              +
            </Button>
          </div>
          {showConditionaly(category, ['smartPhone', 'tablet', 'laptop']) && (
            <InputGrp register={register} errors={errors} name="processor" label="Processor" placeholder="Processor" />
          )}
          {showConditionaly(category, ['smartPhone', 'tablet']) && (
            <FrontCameraSensors frontCameraSensors={frontCameraSensors} setfrontCameraSensors={setfrontCameraSensors} />
          )}
          {showConditionaly(category, ['smartPhone', 'tablet']) && (
            <BackCameraSensors backCameraSensors={backCameraSensors} setbackCameraSensors={setbackCameraSensors} />
          )}
          {showConditionaly(category, ['smartPhone', 'tablet', 'laptop']) && (
            <>
              <h3>Operating System</h3>
              <InputGrp
                register={register}
                errors={errors}
                name="os"
                label="Operating System"
                placeholder="(Ex: Android, iOS, Windows)"
              />
              <h3>Battery</h3>
              <InputGrp
                register={register}
                errors={errors}
                name="battery"
                label="Battery (In mAh)"
                placeholder="Battery Capacity"
                type="number"
              />
              <InputGrp
                register={register}
                errors={errors}
                name="batteryType"
                label="Battery Type"
                placeholder="(Ex: Li-po, Li-ion)"
              />
              <h3>Dimensions</h3>
              <InputGrpN
                name="length"
                label="Length"
                placeholder="Length"
                onChange={(e) => handleChange(e, dimensions, setdimensions)}
                value={dimensions.length}
                type="number"
              />
              <InputGrpN
                name="width"
                label="Width"
                placeholder="Width"
                onChange={(e) => handleChange(e, dimensions, setdimensions)}
                value={dimensions.width}
                type="number"
              />
              <InputGrpN
                name="thickness"
                label="Thickness"
                placeholder="Thickness"
                onChange={(e) => handleChange(e, dimensions, setdimensions)}
                value={dimensions.thickness}
                type="number"
              />
            </>
          )}
          {showConditionaly(category, ['smartPhone', 'tablet', 'laptop']) && (
            <>
              <h3>Display</h3>
              <InputGrpN
                name="displayType"
                label="Display Type"
                placeholder="(Ex: IPS, Amoled)"
                onChange={(e) => handleChange(e, display, setdisplay)}
                value={display.displayType}
              />
              <InputGrpN
                name="displaySize"
                label="Display Size"
                placeholder="Size (In inches)"
                onChange={(e) => handleChange(e, display, setdisplay)}
                value={display.displaySize}
              />
              <InputGrpN
                name="displayResolution"
                label="Display Resolution"
                placeholder="(Ex: 1080p, 720p)"
                onChange={(e) => handleChange(e, display, setdisplay)}
                value={display.displayResolution}
              />
              <InputGrpN
                name="displayScreenToBodyRatio"
                label="Screen to Body Ratio"
                placeholder="(Ex: 85%)"
                onChange={(e) => handleChange(e, display, setdisplay)}
                value={display.displayScreenToBodyRatio}
              />
              <h3>Others</h3>
              <InputGrp
                register={register}
                errors={errors}
                name="weight"
                label="Weight"
                placeholder="Weight (Ex: 209gm)"
              />
            </>
          )}
          {showConditionaly(category, ['earphone']) && (
            <InputGrp
              register={register}
              errors={errors}
              name="driver"
              label="Number of driver"
              placeholder="(Ex: 1, 2)"
              type="number"
            />
          )}
          {showConditionaly(category, ['gimbal']) && (
            <InputGrp
              register={register}
              errors={errors}
              name="axis"
              label="Number of axis"
              placeholder="(Ex: 2, 3)"
              type="number"
            />
          )}
          {showConditionaly(category, ['drone']) && (
            <InputGrp
              register={register}
              errors={errors}
              name="flyingTime"
              label="Flying Time"
              placeholder="Flying Time (In minutes)"
              type="number"
            />
          )}
          <Button type="submit" primary className="d-block my-3 px-5">
            Add Product
          </Button>
        </form>
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
