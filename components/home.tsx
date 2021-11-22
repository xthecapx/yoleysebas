import Header from './header'
import SiteMain from './siteMain'
import Cards from './cards'
import SaveTheDate from './saveTheDate'
import Confirmation from './confirmation'

export default function Home(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <SiteMain />
      <Cards />
      <SaveTheDate />
      <Confirmation />
    </div>
  )
}
