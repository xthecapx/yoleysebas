import Head from 'next/head'
import firebase from '../firebase/clientApp'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Home from './home'

library.add(fab, faEnvelope)

export default function Index({ guest }): JSX.Element {
  console.log(guest)

  return (
    <div className="container">
      <Head>
        <title>Next.js w/ Firebase Client-Side</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Home />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const db = firebase.firestore()

  async function getGuests(db) {
    const guestsCollection = db.collection('guests')
    const guestsSnapshot = await guestsCollection.get()
    const guestsList = guestsSnapshot.docs.map((doc) => doc.data())

    return guestsList
  }

  const guest = await getGuests(db)
  return {
    props: {
      guest,
    },
  }
}
