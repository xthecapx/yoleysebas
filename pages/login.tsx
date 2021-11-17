import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import firebase from '../firebase/clientApp'
import { useState } from 'react'

// Custom App to wrap it with context provider
export default function Login(): JSX.Element {
  const [email, setEmail] = useState('')
  const login = async (email: string) => {
    try {
      const response = await firebase
        .auth()
        .signInWithEmailAndPassword(email, email)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div
        className="w-full h-screen md:-mx-4"
        style={{
          filter: 'blur(6px)',
          backgroundImage: "url('/images/image-01.jpg')",
        }}
      />
      <div
        className="absolute w-3/5 bg-white"
        style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}
      >
        <div className="flex justify-center -mt-10">
          <img
            className="border-2 w-20 h-20 rounded-full"
            src="/images/image-01.jpg"
          />
        </div>
        <div className="px-12 py-10">
          <div className="w-full mb-2">
            <div className="flex relative ">
              <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="text"
                id="email-with-icon"
                className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-8 flex justify-between">
            <button
              type="button"
              className="bg-yellow-400 text-xs text-gray-700 rounded px-4 py-2"
              onClick={() => login(email)}
            >
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
