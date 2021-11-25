import Header from './header'
import Cards from './cards'
import SaveTheDate from './saveTheDate'
import Confirmation from './confirmation'
import Services from './services'
import Plans from './plans'
import Footer from './footer'
import Jumbotron from './jumbotron'
import Countdown from './countdown'

export default function Home(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <Jumbotron />
      <Countdown />
      <Cards />
      <Services />
      <SaveTheDate />
      <Plans />
      <Confirmation />
      <Footer />
    </div>
  )
}
