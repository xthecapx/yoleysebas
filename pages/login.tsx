import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import firebase from '../firebase/clientApp'
import mainImage from '../public/images/proposal/proposal9.jpeg'
import useBreakpoint from '../hooks/useBreakpoint'
import clsx from 'clsx'

import Image from 'next/image'
import { useState } from 'react'

// Custom App to wrap it with context provider
export default function Login(): JSX.Element {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const breakpoint = useBreakpoint()
  const login = async (email: string) => {
    const user = email.toLocaleLowerCase()

    try {
      setError('')
      await firebase.auth().signInWithEmailAndPassword(user, user)
    } catch (error) {
      setError('El email no es valido')
    }
  }
  const isMobile = breakpoint === 'xs'

  return (
    <>
      <div className="w-full h-screen md:-mx-4 login-bg" />
      <div
        className={clsx('absolute bg-white', {
          'w-3/5': !isMobile,
          'w-full': isMobile,
        })}
        style={{ transform: 'translate(-50%, -50%)', top: '50%', left: '50%' }}
      >
        <div className="flex justify-center -mt-10">
          <Image
            src={mainImage}
            alt="proposal 2"
            className="border-2 rounded-full"
            placeholder="blur"
            quality="90"
            layout="fixed"
            width="80"
            height="80"
          />
        </div>
        <div
          className={clsx({
            'px-12 py-10': !isMobile,
            'px-4 py-4': isMobile,
          })}
        >
          <div className="w-full mb-2">
            <div
              className={clsx('flex relative', {
                'border border-red-300 rounded': error,
              })}
            >
              <span className="rounded-l-md inline-flex items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="text"
                id="email-with-icon"
                className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:border-transparent"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => {
                  setError('')
                  setEmail(e.target.value)
                }}
              />
            </div>
            {error && (
              <div className="mt-2 flex relative">
                <p className="text-red-500 text-xs italic">{error}</p>
              </div>
            )}
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
