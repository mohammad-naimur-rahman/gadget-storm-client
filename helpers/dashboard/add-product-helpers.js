export const handleAddVariant = (getter, setter, schema) => {
  setter([...getter, schema])
  console.log(getter)
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

export const showConditionaly = (category, forShow) => {
  const arr = forShow.map((each) => category === each)
  return arr.find((el) => el === true) ? true : false
}
