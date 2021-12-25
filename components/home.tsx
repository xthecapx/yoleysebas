import Header from './header'
// import Cards from './cards'
// import SaveTheDate from './saveTheDate'
import Confirmation from './confirmation'
// import Services from './services'
// import Plans from './plans'
import Information from './information'
import Footer from './footer'
import Jumbotron from './jumbotron'
import Countdown from './countdown'
import Gallery from './gallery'
import Video from './video'
// import Event from './event'
import { useUser } from '../context/userContext'

export default function Home(): JSX.Element {
  const { user } = useUser()

  return (
    <div className="page">
      <Header />
      <Jumbotron />
      <Countdown />
      <Gallery />
      <Video />
      {/* <Event /> */}
      <Information />
      {/* <Cards />
      <Services />
      <SaveTheDate />
      <Plans />
      <Confirmation /> */}
      {user && user.name && <Confirmation user={user} />}
      <Footer />
    </div>
  )
}
