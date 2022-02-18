export const selectedSetter = (elem, setter) => {
  if (elem) {
    if (elem.length === 1) {
      const obj = [elem[0]]
      setter([
        {
          ...obj,
          selected: true
        }
      ])
    } else {
      const newArr = elem.map((color) => {
        return { ...color, selected: false }
      })
      setter(newArr)
    }
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
