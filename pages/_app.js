import '../styles/global.css'
import { appWithTranslation } from 'next-i18next'
import ReactGA from 'react-ga'
import CookieBanner from "../components/cookieBanner"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CookieBanner />
      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(MyApp)

