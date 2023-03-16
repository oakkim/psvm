import Footer from '@/components/base/Footer'
import Header from '@/components/base/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header/>
      <div className="flex justify-center pt-12">
        <Component {...pageProps} />
      </div>
      <Footer/>
    </div>
  )
}
