import { GetServerSideProps } from 'next'
import Head from 'next/head'
import firebase from '../firebase/clientApp'

import Home from '../components/home'

export default function Index(): JSX.Element {
  return (
    <>
      <Head>
        <title>Next.js w/ Firebase Client-Side</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, maximum-scale=1"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
          integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/fullpage.js@3.0.1/dist/fullpage.min.css"
        ></link>
      </Head>
      <Home />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
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
