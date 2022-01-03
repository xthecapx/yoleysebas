import clsx from 'clsx'
import { useEffect, useState } from 'react'
import firebase from '../firebase/clientApp'
import Close from '@mui/icons-material/Logout'
import IconButton from '@mui/material/IconButton'

export default function Header({ user }): JSX.Element {
  const [
    isScrollValueMoreThanHeaderHeight,
    setIsScrollValueMoreThanHeaderHeight,
  ] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrollValueMoreThanHeaderHeight(window.scrollY > 1)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logout = async () => {
    try {
      await firebase.auth().signOut()
    } catch (error) {
      // console.log(error)
    }
  }

  const navigateTo = (path: string) => {
    document.querySelector(path).scrollIntoView({
      behavior: 'smooth',
    })
  }

  // const createUsers = async () => {
  //   for (let i = 0; i < guests.length; i++) {
  //     const d = guests[i]

  //     await db
  //       .collection('guests')
  //       .doc(d.email)
  //       .set({
  //         name: d.name,
  //         email: d.email,
  //         allergies: '',
  //         confirmed: 0,
  //         invites: d.guests,
  //         vaccinated: false,
  //       })
  //       .then(() => {
  //         console.log('Document successfully written!', i)
  //       })
  //       .catch((error) => {
  //         console.error('Error writing document: ', error)
  //       })
  //   }
  // }

  return (
    <header className="header ttm-header-style-01">
      <div id="site-header-menu" className="site-header-menu ttm-bgcolor-white">
        <div
          className={clsx('site-header-menu-inner ttm-stickable-header', {
            'fixed-header': isScrollValueMoreThanHeaderHeight,
          })}
        >
          <div className="container">
            <div className="site-navigation d-flex flex-row align-items-center">
              <div className="site-branding">
                <span>{`Bienvenido, `}</span>
                <strong>{user.name}</strong>
              </div>
              <div
                className={clsx(
                  'btn-show-menu-mobile menubar menubar--squeeze',
                  {
                    'is-active': isOpen,
                  }
                )}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="menubar-box">
                  <span className="menubar-inner"></span>
                </span>
              </div>
              <nav
                className={clsx('main-menu menu-mobile ml-auto', {
                  show: isOpen,
                })}
                id="menu"
              >
                <ul className="menu">
                  {/* <li className="mega-menu-item active">
                    <a
                      href="#"
                      className="mega-menu-link"
                      onClick={createUsers}
                    >
                      Create User
                    </a>
                  </li> */}
                  <li className="mega-menu-item">
                    <a
                      href="#"
                      className="mega-menu-link"
                      onClick={(e) => {
                        e.preventDefault()
                        navigateTo('#gallery')
                      }}
                    >
                      Fotos
                    </a>
                  </li>
                  <li className="mega-menu-item">
                    <a
                      href="#"
                      className="mega-menu-link"
                      onClick={(e) => {
                        e.preventDefault()
                        navigateTo('#video')
                      }}
                    >
                      Video
                    </a>
                  </li>
                  <li className="mega-menu-item">
                    <a
                      href="#"
                      className="mega-menu-link"
                      onClick={(e) => {
                        e.preventDefault()
                        navigateTo('#evento')
                      }}
                    >
                      Guia del evento
                    </a>
                  </li>
                  <li className="mega-menu-item">
                    <a
                      href="#"
                      className="mega-menu-link"
                      onClick={(e) => {
                        e.preventDefault()
                        navigateTo('#confirmation')
                      }}
                    >
                      Confirma tu asistencia!
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="header_extra d-flex flex-row align-items-center justify-content-end ">
                <IconButton
                  color="primary"
                  aria-label="lougout"
                  component="span"
                  onClick={logout}
                >
                  <Close />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
