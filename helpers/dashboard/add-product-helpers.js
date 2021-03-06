import axios from 'axios'
import { toast } from 'react-toastify'

export const handleAddVariant = (getter, setter, schema) => {
  setter([...getter, schema])
}

export const handleVariant = (variants, setvariants, e, id) => {
  const newInputFields = variants.map((i) => {
    if (id === i.id) {
      i[e.target.name] = e.target.value

      if (i.basePrice || i.discount) {
        if (i.discount.includes('%')) {
          i.price = i.basePrice - (i.basePrice * i.discount.split('%')[0]) / 100
        } else if (typeof +i.discount === 'number') {
          i.price = i.basePrice - i.discount
        } else {
          i.price = i.basePrice
        }
      }
    }
    return i
  })

  setvariants(newInputFields)
}

export const handleDeleteVariant = (variants, setvariants, id) => {
  const values = [...variants]
  values.splice(
    values.findIndex((value) => value.id === id),
    1
  )
  setvariants(values)
}

export const handlePrice = (e, priceSchema, setpriceSchema) => {
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

export const handleImageUpload = async (e, limit, imgArrSetter, showImgSetter) => {
  imgArrSetter([])
  const formData = new FormData()
  const images = e.target.files

  const imgarr = []

  if (images.length > limit) {
    toast.error(`You can only upload ${limit} images`)
    return
  }
  showImgSetter(false)
  toast.info('Uploading image...')

  const imgArr = Array.from(images)

  const uploadImg = async (i) => {
    try {
      formData.append('file', i)
      formData.append('upload_preset', process.env.NEXT_PUBLIC_UPLOAD_PRESET)
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
        formData
      )
      imgarr.push(res.data.secure_url)
    } catch (error) {
      toast.error(error.message)
    }
  }

  const promises = imgArr.map((i) => {
    return uploadImg(i)
  })

  await Promise.all(promises)
  imgArrSetter(imgarr)
  toast.success('All images are uploaded')
  showImgSetter(true)
}

export const handleChange = (e, getter, setter) => {
  setter({
    ...getter,
    [e.target.name]: e.target.value
  })
}

export const handleAddGrp = (value, setvalue, getter, setter, type) => {
  if (value) {
    type === 'color' ? setvalue('#0062B1') : setvalue('')
    setter([...getter, value])
  }
}

export const handleDeleteGrp = (value, getter, setter) => {
  const values = [...getter]
  const newValues = values.filter((el) => el !== value)
  setter(newValues)
}
