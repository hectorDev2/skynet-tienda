import type { AppProps } from 'next/app'
import Script from 'next/script'
import './styles.css'
import { resetCss } from '../../stitches.config'
export default function App({ Component, pageProps }: AppProps) {
  resetCss()
  return (
    <>
      <Component {...pageProps} />
      <Script type="module" src="../scripts/app.js" />
    </>
  )
}
