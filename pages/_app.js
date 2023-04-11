import '../styles/global.css'
import { appWithTranslation } from 'next-i18next'
import ReactGA from 'react-ga';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(App)
