import { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Codetech</title>
        <link rel="icon" href="favicon.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
