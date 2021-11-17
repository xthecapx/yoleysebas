import UserProvider from '../context/userContext'
import 'tailwindcss/tailwind.css'

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }): JSX.Element {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}
