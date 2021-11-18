import Header from './header'
import SiteMain from './siteMain'
import Cards from './cards'

export default function Home(): JSX.Element {
  return (
    <div className="page">
      <Header />
      <SiteMain />
      <Cards />
    </div>
  )
}
