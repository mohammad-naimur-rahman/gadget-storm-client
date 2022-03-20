import { ToastContainer } from 'react-toastify'
import '../styles/styles.scss'
import 'semantic-ui-css/semantic.min.css'
import 'react-pro-sidebar/dist/css/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Provider } from 'react-redux'
import store from '../store'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  )
}

export default MyApp
