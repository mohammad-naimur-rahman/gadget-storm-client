import DLayout from '@/components/common/Layout/DLayout'
import { InputGrp, InputGrpN, InputSelect } from '@/components/common/utils/InputGrp'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Checkbox } from 'semantic-ui-react'
import Data from '@/data/categories.json'
import Variants from '@/components/pageComponents/Dashboard/AddProductPage/Variants'
import ReactTooltip from 'react-tooltip'
import FrontCameraSensors from '@/components/pageComponents/Dashboard/AddProductPage/FrontCameraSensors'
import BackCameraSensors from '@/components/pageComponents/Dashboard/AddProductPage/BackCameraSensors'
import { showConditionaly } from '@/helpers/helpers'
import { handleChange, handleImageUpload, handlePrice } from '@/helpers/dashboard/add-product-helpers'
import InputGroups from '@/components/pageComponents/Dashboard/AddProductPage/InputGroups'
import axios from 'axios'
import { API_URL } from '@/helpers/API'
import { toast } from 'react-toastify'
import Colors from '@/components/pageComponents/Dashboard/AddProductPage/Colors'
import ReactMarkdown from 'react-markdown'
import { isNonEmptyArr, isNonEmptyObj } from '@/helpers/product-details-helpers'

const AddProductPage = ({ data }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const isNonEmpty = (elem) => elem.length !== 0

  const [category, setcategory] = useState('smartPhone')
  const [variants, setvariants] = useState([])
  const [priceSchema, setpriceSchema] = useState({
    basePrice: '',
    discount: '',
    price: 0
  })

  const [description, setdescription] = useState('')
  const [image, setimage] = useState([])
  const [showImgPreview, setshowImgPreview] = useState(false)
  const [descriptionImage, setdescriptionImage] = useState([])
  const [showDescImgPreview, setshowDescImgPreview] = useState(false)
  const [frontCameraSensors, setfrontCameraSensors] = useState([])
  const [frontCameraVideoCapability, setfrontCameraVideoCapability] = useState('')
  const [backCameraSensors, setbackCameraSensors] = useState([])
  const [backCameraVideoCapability, setbackCameraVideoCapability] = useState('')

  const [dimensions, setdimensions] = useState({
    length: '',
    width: '',
    thickness: ''
  })

  const [display, setdisplay] = useState({
    displayType: '',
    displaySize: '',
    displayResolution: '',
    displayScreenToBodyRatio: '',
    refreshRate: ''
  })

  const [feature, setfeature] = useState('')
  const [features, setfeatures] = useState([])

  const [boxContent, setboxContent] = useState('')
  const [boxContents, setboxContents] = useState([])

  const [port, setport] = useState('')
  const [ports, setports] = useState([])

  const [colors, setcolors] = useState([])

  const [coupon, setcoupon] = useState({
    code: '',
    discount: '',
    startDate: undefined,
    endDate: undefined,
    totalCoupon: ''
  })

  const [processor, setprocessor] = useState({
    brand: '',
    model: '',
    core: '',
    details: '',
    gpu: ''
  })

  const [featured, setfeatured] = useState(false)
  const [supply, setsupply] = useState(true)

  const resetOtherValues = () => {
    setdescription('')
    setimage([])
    setdescriptionImage([])
    setpriceSchema({
      basePrice: '',
      discount: '',
      price: 0
    })
    setdimensions({
      length: '',
      width: '',
      thickness: ''
    })
    setdisplay({
      displayType: '',
      displaySize: '',
      displayResolution: '',
      displayScreenToBodyRatio: '',
      refreshRate: ''
    })
    setcoupon({
      code: '',
      discount: '',
      startDate: undefined,
      endDate: undefined,
      totalCoupon: ''
    })
    setcolors([])
    setfeatures([])
    setboxContents([])
    setports([])
    setvariants([])
    setfrontCameraSensors([])
    setfrontCameraVideoCapability('')
    setbackCameraSensors([])
    setbackCameraVideoCapability('')
    setfeatured(false)
    setsupply(true)
  }

  const onSubmit = async (data) => {
    if (showConditionaly(category, ['smartPhone', 'tablet', 'laptop', 'smartWatch'])) {
      if (!isNonEmptyArr(variants)) return toast.error('Please add atleast one variant')
    }
    const datas = {
      ...data,
      category,
      colors,
      ports,
      features,
      boxContents,
      featured,
      supply,
      description,
      frontCamera: { sensor: frontCameraSensors, videoCapability: frontCameraVideoCapability },
      backCamera: { sensor: backCameraSensors, videoCapability: backCameraVideoCapability }
    }
    if (isNonEmptyObj(processor)) datas.processor = processor
    if (isNonEmptyObj(dimensions)) datas.dimensions = dimensions
    if (isNonEmptyObj(display)) datas.display = display
    if (isNonEmptyObj(coupon)) datas.coupon = coupon
    showConditionaly(category, ['smartPhone', 'tablet', 'laptop', 'smartWatch']) && (datas.variants = variants)
    !showConditionaly(category, ['smartPhone', 'tablet', 'laptop', 'smartWatch']) &&
      (datas = { ...datas, ...priceSchema })
    if (isNonEmpty(image)) datas.images = image
    if (isNonEmpty(descriptionImage)) datas.descriptionImages = descriptionImage
    try {
      const response = await axios.post(`${API_URL}/products`, datas)
      console.log('PRODUCT_DATA', response?.data?.data?.data)
      if (response.status === 201) {
        toast.success('Product added successfully')
        reset()
        resetOtherValues()
      } else {
        toast.error('Something went wrong!')
      }
    } catch (error) {
      console.log(error.message)
      toast.error('Something went wrong!')
    }
  }

  return (
    <DLayout className="p-4">
      <div className="d-flex">
        <form onSubmit={handleSubmit(onSubmit)} className="w-100">
          <h2>Add Product</h2>
          <InputSelect label="Choose Category :" name="category" getter={category} setter={setcategory}>
            {data?.map((item) => (
              <option value={item.sku} key={item.name}>
                {item.name}
              </option>
            ))}
          </InputSelect>
          <InputGrp
            register={register}
            errors={errors}
            name="name"
            label="Product Name"
            required={true}
            placeholder="Product Name"
            autoFocus={true}
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
          {showConditionaly(category, ['smartPhone', 'tablet', 'laptop', 'smartWatch']) || (
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
            //required={true}
            type="file"
            accept="image/*"
            multiple={true}
            onChange={(e) => handleImageUpload(e, 5, setimage, setshowImgPreview)}
            description="Please upload potrait mode or square shaped photo and you can upload up to 5 images"
          />
          {showImgPreview && (
            <div className="d-flex mb-3">
              {[...image].map((img, i) => (
                <img key={i} src={img} alt={i} className="preview-img m-1" />
              ))}
            </div>
          )}
          <InputGrpN
            name="descriptionImages"
            label="Description Images"
            type="file"
            accept="image/*"
            multiple={true}
            onChange={(e) => handleImageUpload(e, 3, setdescriptionImage, setshowDescImgPreview)}
            description="Please upload landscape mode photo and you can upload up to 3 images"
          />
          {showDescImgPreview && (
            <div className="d-flex mb-3">
              {[...descriptionImage].map((img, i) => (
                <img key={i} src={img} alt={i} className="preview-img m-1" />
              ))}
            </div>
          )}
          <div className="row">
            <div className="col-lg-8 d-flex flex-column mb-3">
              <div className="d-flex">
                <label htmlFor="description">
                  Description* <span>&nbsp;</span> :
                </label>
                <textarea
                  id="description"
                  cols="60"
                  rows="10"
                  required="true"
                  onChange={(e) => setdescription(e.target.value)}
                  placeholder="Ex:
                  ### Description Header
                  * Good product
                  * Fast charging
                  "
                ></textarea>
              </div>
              <p className="py-2 text-secondary">
                <i>
                  Use <span className="text-black fw-bold">Markdown</span> for description
                </i>
              </p>
            </div>
            <div className="col-lg-4">
              <h3 className="pb-3">Description Preview</h3>
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>
          </div>
          <InputGroups
            title="Feature"
            singleGetter={feature}
            singleSetter={setfeature}
            getter={features}
            setter={setfeatures}
          />
          {showConditionaly(category, ['smartPhone', 'tablet']) && (
            <>
              <h3>Cameras</h3>
              <FrontCameraSensors
                frontCameraSensors={frontCameraSensors}
                setfrontCameraSensors={setfrontCameraSensors}
              />
              <InputGrpN
                name="frontCameraVideoCapability"
                label="Front Camera Video Capability"
                placeholder="Front Camera Video Capability"
                type="text"
                onChange={(e) => setfrontCameraVideoCapability(e.target.value)}
              />
              <BackCameraSensors backCameraSensors={backCameraSensors} setbackCameraSensors={setbackCameraSensors} />
              <InputGrpN
                name="backCameraVideoCapability"
                label="Back Camera Video Capability"
                placeholder="Back Camera Video Capability"
                type="text"
                onChange={(e) => setbackCameraVideoCapability(e.target.value)}
              />
            </>
          )}
          {showConditionaly(category, ['smartPhone', 'tablet', 'laptop', 'smartWatch']) && (
            <>
              <h3>Processor and OS</h3>
              <InputGrp
                register={register}
                errors={errors}
                name="os"
                label="Operating System"
                placeholder="(Ex: Android, iOS, Windows)"
              />
              <InputGrpN
                name="brand"
                label="Processor Model Name"
                placeholder="Processor Model Name"
                onChange={(e) => handleChange(e, processor, setprocessor)}
                value={processor.brand}
              />
              <InputGrpN
                name="model"
                label="Processor Model"
                placeholder="Processor Model"
                onChange={(e) => handleChange(e, processor, setprocessor)}
                value={processor.model}
              />
              <InputGrpN
                name="core"
                label="Number of Core"
                placeholder="(Ex: 2, 4, 8)"
                onChange={(e) => handleChange(e, processor, setprocessor)}
                value={processor.core}
                type="number"
              />
              <InputGrpN
                name="details"
                label="Processor Details"
                placeholder="(Ex: 2 * 2.2GHz, 6 * 1.8GHz)"
                onChange={(e) => handleChange(e, processor, setprocessor)}
                value={processor.details}
              />
              <InputGrpN
                name="gpu"
                label="GPU"
                placeholder="GPU Name & Detils"
                onChange={(e) => handleChange(e, processor, setprocessor)}
                value={processor.gpu}
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
          {showConditionaly(category, [
            'smartPhone',
            'tablet',
            'laptop',
            'smartWatch',
            'earphone',
            'dslr',
            'gimbal',
            'drone',
            'actionCam',
            'bluetoothSpeaker'
          ]) && (
            <>
              <h3>Battery and Charing</h3>
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
              <InputGrp
                register={register}
                errors={errors}
                name="chargingSpeed"
                label="Charging Speed"
                placeholder="Charging Speed (In Watt)"
                type="number"
              />
            </>
          )}

          {showConditionaly(category, ['smartPhone', 'tablet', 'laptop', 'smartWatch', 'dslr']) && (
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
              <InputGrpN
                name="refreshRate"
                label="Screen Refresh Rate"
                placeholder="Refresh Rate (In Hz)"
                onChange={(e) => handleChange(e, display, setdisplay)}
                value={display.refreshRate}
                type="number"
              />
            </>
          )}
          {showConditionaly(category, [
            'smartPhone',
            'tablet',
            'laptop',
            'gimbal',
            'drone',
            'dslr',
            'actionCam',
            'powerBank'
          ]) && (
            <>
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
          <InputGroups
            title="Box Content"
            singleGetter={boxContent}
            singleSetter={setboxContent}
            getter={boxContents}
            setter={setboxContents}
          />
          {showConditionaly(category, ['smartPhone', 'tablet', 'laptop', 'powerBank', 'dslr']) && (
            <InputGroups title="Port" singleGetter={port} singleSetter={setport} getter={ports} setter={setports} />
          )}
          {showConditionaly(category, ['powerBank']) && (
            <InputGrp
              register={register}
              errors={errors}
              name="capacity"
              label="Battery Capacity"
              placeholder="Capacity (In mAh)"
              type="number"
            />
          )}
          {showConditionaly(category, ['chargerAndCable']) && (
            <InputGrp
              register={register}
              errors={errors}
              name="length"
              label="Cable Length"
              placeholder="Length (In meters)"
              type="number"
            />
          )}
          <Colors colors={colors} setcolors={setcolors} />
          {showConditionaly(category, ['dslr', 'actionCam', 'drone']) && (
            <>
              <h3>Camera</h3>
              <InputGrp
                register={register}
                errors={errors}
                name="camera"
                label="Camera Capacity"
                placeholder="Camera Capacity (In megapixels)"
                type="number"
              />
              <InputGrp
                register={register}
                errors={errors}
                name="imageSensor"
                label="Image Sensor"
                placeholder="Image Sensor"
              />
            </>
          )}
          <h3>Coupon</h3>
          <InputGrpN
            name="code"
            label="Coupon Code"
            placeholder="Coupon Code"
            onChange={(e) => handleChange(e, coupon, setcoupon)}
            value={coupon.code}
          />
          <InputGrpN
            name="discount"
            label="Discount"
            placeholder="Discount (In dollars or %)"
            onChange={(e) => handleChange(e, coupon, setcoupon)}
            value={coupon.discount}
          />
          <InputGrpN
            name="startDate"
            label="Start Date"
            placeholder="Start Date"
            onChange={(e) => handleChange(e, coupon, setcoupon)}
            value={coupon.startDate}
            type="date"
          />
          <InputGrpN
            name="endDate"
            label="End Date"
            placeholder="End Date"
            onChange={(e) => handleChange(e, coupon, setcoupon)}
            value={coupon.endDate}
            type="date"
          />
          <InputGrpN
            name="totalCoupon"
            label="Total Coupon"
            placeholder="Total Coupon (Number of coupons)"
            onChange={(e) => handleChange(e, coupon, setcoupon)}
            value={coupon.totalCoupon}
            type="number"
          />

          <h3>Internals</h3>
          <InputGrp
            register={register}
            errors={errors}
            name="stockValue"
            label="Stock"
            placeholder="In Stock (Number of items)"
            type="number"
          />
          <div className="py-3">
            <Checkbox
              className="slider-checkbox"
              slider
              label="Featured"
              checked={featured}
              onChange={() => setfeatured(!featured)}
            />
            <Checkbox
              className="slider-checkbox"
              slider
              label="Supply"
              checked={supply}
              onChange={() => setsupply(!supply)}
            />
          </div>
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
