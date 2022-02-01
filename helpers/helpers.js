export const showConditionaly = (category, forShow) => {
  const arr = forShow.map((each) => category === each)
  return arr.find((el) => el === true) ? true : false
}
