const { toast } = require('react-toastify')

const addToWishList = (pd) => {
  const wishlist = JSON.parse(localStorage.getItem('wishlist'))
  if (wishlist) {
    const isExist = wishlist.some((item) => item.id === pd.id)
    if (isExist) {
      toast.error('Product already added to wishlist')
    } else {
      localStorage.setItem('wishlist', wishlist ? JSON.stringify([...wishlist, pd]) : JSON.stringify([pd]))
      toast.success('Product added to wishlist!')
    }
  } else {
    localStorage.setItem('wishlist', JSON.stringify([pd]))
    toast.success('Product added to wishlist!')
  }
}

export default addToWishList
