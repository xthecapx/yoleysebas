import type { AppProps } from 'next/app'
import UserProvider from '../context/userContext'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import '../styles/main.scss'
import 'tailwindcss/tailwind.css'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

library.add(faEnvelope, faHeart)

const theme = createTheme({
  palette: {
    primary: {
      main: '#c78665',
    },
  },
})

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ThemeProvider>
  )
}
