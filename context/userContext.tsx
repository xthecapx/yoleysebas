import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactChildren,
  ReactChild,
} from 'react'
import { useRouter } from 'next/router'
import firebase, { db } from '../firebase/clientApp'

export const UserContext = createContext(null)

export default function UserContextComp({
  children,
}: {
  children: ReactChild | ReactChildren
}): JSX.Element {
  const [user, setUser] = useState(null)
  const router = useRouter()
  const [loadingUser, setLoadingUser] = useState(true) // Helpful, to update the UI accordingly.

  useEffect(() => {
    // Listen authenticated user
    const unsubscriber = firebase.auth().onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const ref = await db.collection('guests').doc(user.email).get()
          const guest = ref.data()
          // User is signed in.
          const { allergies, confirmed, email, invites, name, vaccinated } =
            guest
          // You could also look for the user doc in your Firestore (if you have one):
          // const userDoc = await firebase.firestore().doc(`users/${uid}`).get()
          setUser({ allergies, confirmed, email, invites, name, vaccinated })
          router.push('/')
        } else {
          setUser(null)
          router.push('/login')
        }
      } catch (error) {
        // Most probably a connection error. Handle appropriately.
      } finally {
        setLoadingUser(false)
      }
    })

    // Unsubscribe auth listener on unmount
    return () => unsubscriber()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, loadingUser }}>
      {children}
    </UserContext.Provider>
  )
}

// Custom hook that shorthands the context!
export const useUser = () => useContext(UserContext)
