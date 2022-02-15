const isNew = (oldDate) => {
  const old = new Date(oldDate)
  const newD = new Date()
  const diff = newD.getTime() - old.getTime()
  const diffDays = Math.ceil(diff / (1000 * 3600 * 24))
  return diffDays <= 30
}

export default isNew
