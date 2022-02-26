export const selectedSetter = (elem, groupSetter) => {
  let newArr
  if (elem.length > 0) {
    newArr = elem.map((color) => {
      return { ...color, selected: false }
    })
    newArr[0].selected = true
    groupSetter(newArr)
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

export const isNonEmptyArr = (elem) => elem && elem.length !== 0
export const isNonEmptyString = (elem) =>
  elem && !elem.toString().includes('null') && !elem.toString().includes('undefined') && elem.length !== 0
export const isEmptyObj = (obj) => Object.keys(obj).length === 0
export const isNonEmptyObj = (obj) => Object.keys(obj).length !== 0
