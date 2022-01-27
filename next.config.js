module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/add-product',
        permanent: true
      }
    ]
  }
}
