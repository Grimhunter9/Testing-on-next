import '../styles/globals.css'
import '../styles/layout.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {

  if (Component.Layout) {
    return Component.Layout(<Component  {...pageProps} />)
  }

  return (

    <div>
      <Head><link rel="shortcut icon" href="/logo.jpg" />
        <title>Testing with next</title>
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />

    </div>
  )
}
