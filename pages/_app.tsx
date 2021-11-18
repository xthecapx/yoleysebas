import type { AppProps } from 'next/app'
import UserProvider from '../context/userContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../styles/main.scss'
import 'tailwindcss/tailwind.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

library.add(faEnvelope)

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
