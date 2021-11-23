import Header from './header'
import SiteMain from './siteMain'
import Cards from './cards'
import SaveTheDate from './saveTheDate'
import Confirmation from './confirmation'
import Services from './services'
import Plans from './plans'
import Footer from './footer'

export default function Home(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <SiteMain />
      <Cards />
      <Services />
      <SaveTheDate />
      <Plans />
      <Confirmation />
      <Footer />
    </div>
  )
}
