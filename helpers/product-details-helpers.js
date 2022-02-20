export const selectedSetter = (elem, setter) => {
  let newArr
  if (elem.length > 0) {
    newArr = elem.map((color) => {
      return { ...color, selected: false }
    })
    newArr[0].selected = true
    setter(newArr)
  }
}

export const setSelected = (id, groupGetter, groupSetter, setter) => {
  const newArr = groupGetter.map((el) => {
    el.selected = false
    if (el._id === id) {
      el.selected = true
      setter(el)
    }
    return el
  })
  groupSetter(newArr)
}
