import '../styles/styles.scss'
import 'semantic-ui-css/semantic.min.css'
import 'react-pro-sidebar/dist/css/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  )
}

export default MyApp
