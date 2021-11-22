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

  return (
    <header
      id="masthead"
      className={`header ttm-header-style-01 ${
        isScrollValueMoreThanHeaderHeight ? 'fixed-header' : ''
      }`}
    >
      <div
        id="site-header-menu"
        className="site-header-menu ttm-bgcolor-darkgrey"
      >
        <div className="site-header-menu-inner ttm-stickable-header">
          <div className="container">
            <div className="site-navigation d-flex flex-row align-items-center">
              <div className="site-branding">Yole y Sebas</div>
              <div className="btn-show-menu-mobile menubar menubar--squeeze">
                <span className="menubar-box">
                  <span className="menubar-inner"></span>
                </span>
              </div>

              <nav className="main-menu menu-mobile ml-auto" id="menu">
                <ul className="menu">
                  <li className="mega-menu-item active">
                    <a href="#" className="mega-menu-link" onClick={logout}>
                      Logout
                    </a>
                  </li>
                  <li className="mega-menu-item active">
                    <a href="#" className="mega-menu-link">
                      Home
                    </a>
                    {/*<ul className="mega-submenu">
                      <li className="active">
                        <a href="index.html">Home Wedding</a>
                      </li>
                      <li>
                        <a href="home-photography.html">Home Photography</a>
                      </li>
                      <li>
                        <a href="home-invitation.html">Home Invitation</a>
                      </li>
                      <li>
                        <a href="wedding-planner.html">Wedding Planner</a>
                      </li>
                      <li>
                        <a href="home-catering.html">Home Catering</a>
                      </li>
                      <li className="mega-menu-item active">
                        <a href="#" className="mega-menu-link">
                          Header Styles
                        </a>
                        <ul className="mega-submenu">
                          <li>
                            <a href="header-classNameic.html">
                              Header ClassNameic
                            </a>
                          </li>
                          <li className="active">
                            <a href="index.html">Header Overlay</a>
                          </li>
                          <li>
                            <a href="header-center-logo.html">
                              Header Center Logo
                            </a>
                          </li>
                          <li>
                            <a href="header-infostack.html">Header Infostack</a>
                          </li>
                        </ul>
                      </li>
                  </ul>*/}
                  </li>
                  <li className="mega-menu-item">
                    <a href="#" className="mega-menu-link">
                      Pages
                    </a>
                    <ul className="mega-submenu">
                      <li>
                        <a href="about-us.html">About Us 1</a>
                      </li>
                      <li>
                        <a href="about-us-2.html">About Us 2</a>
                      </li>
                      <li>
                        <a href="services-1.html">Services 1</a>
                      </li>
                      <li>
                        <a href="services-2.html">Services 2</a>
                      </li>
                      <li>
                        <a href="our-events.html">Our Events</a>
                      </li>
                      <li>
                        <a href="our-story.html">Our Story</a>
                      </li>
                      <li>
                        <a href="our-team.html">Our Team</a>
                      </li>
                      <li>
                        <a href="team-details.html">Team Details</a>
                      </li>
                      <li>
                        <a href="error.html">404 Page</a>
                      </li>
                      <li className="mega-menu-item">
                        <a href="#" className="mega-menu-link">
                          Shop
                        </a>
                        <ul className="mega-submenu">
                          <li>
                            <a href="shop.html">Default Shop</a>
                          </li>
                          <li>
                            <a href="product-details.html">
                              Single Product Details
                            </a>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-menu-item">
                    <a href="#" className="mega-menu-link">
                      Services
                    </a>
                    <ul className="mega-submenu">
                      <li>
                        <a href="lovely-decoration.html">Lovely Decoration</a>
                      </li>
                      <li>
                        <a href="live-music-and-dj.html">Live Music &amp; Dj</a>
                      </li>
                      <li>
                        <a href="dinner-and-drinks.html">Dinner &amp; Drinks</a>
                      </li>
                      <li>
                        <a href="seating-chart.html">Seating Chart</a>
                      </li>
                      <li>
                        <a href="responsible-sourcing.html">
                          Responsible Sourcing
                        </a>
                      </li>
                      <li>
                        <a href="costume-services.html">Costume Services</a>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-menu-item">
                    <a href="#" className="mega-menu-link">
                      Portfolio
                    </a>
                    <ul className="mega-submenu">
                      <li>
                        <a href="portfolio-style-01.html">Portfolio Style 1</a>
                      </li>
                      <li>
                        <a href="portfolio-style-02.html">Portfolio Style 2</a>
                      </li>
                      <li className="mega-menu-item">
                        <a href="#" className="mega-menu-link">
                          Portfolio Single
                        </a>
                        <ul className="mega-submenu">
                          <li>
                            <a href="wedding-bells.html">Single Style One</a>
                          </li>
                          <li>
                            <a href="best-florists.html">Single Style Two</a>
                          </li>
                          <li>
                            <a href="bride-groom.html">Single Style Three</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="mega-menu-item">
                    <a href="#" className="mega-menu-link">
                      Blog
                    </a>
                    <ul className="mega-submenu">
                      <li>
                        <a href="blog.html">Blog ClassNameic</a>
                      </li>
                      <li>
                        <a href="blog-grid.html">Blog Grid View</a>
                      </li>
                      <li>
                        <a href="blog-top-image.html">Blog Top Image</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Single View</a>
                      </li>
                    </ul>
                  </li>
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
