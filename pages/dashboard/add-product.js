import DLayout from '@/components/common/Layout/DLayout'
import { InputGrp, InputGrpN } from '@/components/common/utils/InputGrp'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'semantic-ui-react'
import Data from '@/data/categories.json'
import Variants from '@/components/pageComponents/Dashboard/AddProductPage/Variants'
import { showConditionaly } from '@/helpers/dashboard/add-product-helpers'
import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import { toast } from 'react-toastify'
import FrontCameraSensors from '@/components/pageComponents/Dashboard/AddProductPage/FrontCameraSensors'
import BackCameraSensors from '@/components/pageComponents/Dashboard/AddProductPage/BackCameraSensors'

const AddProductPage = ({ data }) => {
  const [category, setcategory] = useState('drone')
  const [variants, setvariants] = useState([])
  const [priceSchema, setpriceSchema] = useState({
    basePrice: '',
    discount: '',
    price: 0
  })

  const [image, setimage] = useState([])
  const [descriptionImage, setdescriptionImage] = useState([])
  const [frontCameraSensors, setfrontCameraSensors] = useState([])
  const [backCameraSensors, setbackCameraSensors] = useState([])

  const handlePrice = (e) => {
    const inputFields = {
      ...priceSchema,
      [e.target.name]: e.target.value
    }
    if (inputFields.discount && inputFields.discount.includes('%')) {
      inputFields.price = inputFields.basePrice - (inputFields.basePrice * inputFields.discount.split('%')[0]) / 100
    } else if (inputFields.discount && typeof +inputFields.discount === 'number') {
      inputFields.price = inputFields.basePrice - inputFields.discount
    } else {
      inputFields.price = inputFields.basePrice
    }

    setpriceSchema(inputFields)
  }

  const handleImageUpload = (e, limit, imgArrSetter) => {
    const formData = new FormData()
    const img = e.target.files

    const imgarr = []

    if (img.length > limit) {
      toast.error(`You can only upload ${limit} images`)
      return
    }
    toast.info('Uploading image...')
    for (let i = 0; i < img.length; i++) {
      formData.append('file', img[i])
      formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET)
      ;(async () => {
        try {
          const res = await axios.post(
            `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
            formData
          )
          imgarr.push(res.data.secure_url)
          imgArrSetter(imgarr)
          toast.success(`Image number ${i + 1} uploaded`)
        } catch (error) {
          toast.error('Image upload failed')
        }
      })()
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
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
                onChange={handlePrice}
                value={priceSchema.basePrice}
                type="number"
              />
              <InputGrpN
                name="discount"
                label="Discount"
                placeholder="In dollars or %"
                onChange={handlePrice}
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
          {/* {image && (
            <div className="d-flex">
              {image.map((item) => (
                <img src={item} alt="product" key={item} className="img-thumbnail m-1" />
              ))}
            </div>
          )} */}
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
          {showConditionaly(category, ['smartPhone', 'tablet', 'laptop']) && (
            <InputGrp register={register} errors={errors} name="processor" label="Processor" placeholder="Processor" />
          )}
          {showConditionaly(category, ['smartPhone', 'tablet']) && (
            <FrontCameraSensors frontCameraSensors={frontCameraSensors} setfrontCameraSensors={setfrontCameraSensors} />
          )}
          {showConditionaly(category, ['smartPhone', 'tablet']) && (
            <BackCameraSensors backCameraSensors={backCameraSensors} setbackCameraSensors={setbackCameraSensors} />
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
