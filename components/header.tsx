import clsx from 'clsx'
import { useEffect, useState } from 'react'
import firebase from '../firebase/clientApp'

export default function Header(): JSX.Element {
  const [
    isScrollValueMoreThanHeaderHeight,
    setIsScrollValueMoreThanHeaderHeight,
  ] = useState(false)

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
          <div className="container max-w-screen-lg md:mx-auto">
            <div className="site-navigation d-flex flex-row align-items-center">
              <div className="site-branding">#Yole&amp;Sebas</div>
              <div className="btn-show-menu-mobile menubar menubar--squeeze">
                <span className="menubar-box">
                  <span className="menubar-inner"></span>
                </span>
              </div>

              <nav className="main-menu menu-mobile ml-auto" id="menu">
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
                  <li className="mega-menu-item active">
                    <a href="#" className="mega-menu-link" onClick={logout}>
                      Logout
                    </a>
                  </li>
                  <li className="mega-menu-item">
                    <a
                      href="#"
                      className="mega-menu-link"
                      onClick={(e) => {
                        e.preventDefault()
                        navigateTo('#gallery')
                      }}
                    >
                      La pedida de mano
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
                      El evento
                    </a>
                  </li>
                  {/* <li className="mega-menu-item">
                    <a href="#" className="mega-menu-link">
                      Save the date
                    </a>
                  </li>
                  <li className="mega-menu-item">
                    <a href="#" className="mega-menu-link">
                      Confirma
                    </a>
                  </li>
                  <li className="mega-menu-item">
                    <a href="#" className="mega-menu-link">
                      Contacto
                    </a>
                  </li> */}
                  <li>
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
