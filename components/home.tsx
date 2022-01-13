// import Cards from './cards'
// import SaveTheDate from './saveTheDate'
// import Services from './services'
// import Plans from './plans'
// import Event from './event'
import Header from './header'
import Confirmation from './confirmation'
import Information from './information'
import Footer from './footer'
import Jumbotron from './jumbotron'
import Countdown from './countdown'
import Gallery from './gallery'
import Video from './video'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

import { useUser } from '../context/userContext'

export default function Home(): JSX.Element {
  const { user, open, closeSnackbar, openSnackbar } = useUser()

  return (
    <div className="page">
      {user && user.name && <Header user={user} />}
      <Jumbotron />
      <Countdown />
      <Gallery />
      <Video />
      <Information />
      {user && user.name && user.invites && (
        <Confirmation user={user} openSnackbar={openSnackbar} />
      )}
      <Footer />
      <Snackbar open={open} autoHideDuration={6000} onClose={closeSnackbar}>
        <Alert
          onClose={closeSnackbar}
          severity="success"
          elevation={6}
          variant="filled"
          sx={{ width: '100%' }}
        >
          Gracias por informarnos, {user && user.name}
        </Alert>
      </Snackbar>
    </div>
  )
}
