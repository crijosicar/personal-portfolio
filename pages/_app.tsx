import type { AppProps } from 'next/app'
import { Inter } from "next/font/google";

import '../app/globals.css'

const inter = Inter({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <style jsx global>
          {`
          :root {
            --inter-font: ${inter.style.fontFamily}
          }
        `}
        </style>
        <Component {...pageProps} />
      </>
  )
}
