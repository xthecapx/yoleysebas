import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import IconButton from '@mui/material/IconButton'

export default function StepThree(): JSX.Element {
  return (
    <div className="relative">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} className="text-justify">
          <Card>
            <CardMedia
              component="img"
              height="100"
              image="https://www.elheraldo.co/sites/default/files/articulo/2020/09/12/cumpleanos_de_riohacha.jpg"
              alt="riohacha"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                En riohacha
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`Te puedes hospedar en Riohacha (aproximadamente a 31 kilómetros del Ipuana Virgin Beach).`}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} className="text-justify">
          <Card>
            <CardMedia
              component="img"
              height="100"
              image="https://i.ytimg.com/vi/KUkZjiOKjDA/maxresdefault.jpg"
              alt="mayapo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                En mayapo
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {`Si eliges alojarte en Mayapo, puedes encontrar desde hostales hasta el hotel Wayira Beach.`}
              </Typography>
              <IconButton
                color="primary"
                component="span"
                onClick={() =>
                  window.open('https://www.instagram.com/hotelwayira')
                }
              >
                <i className="ti ti-instagram mr-2" />
              </IconButton>
              <LocationOnIcon
                sx={{ color: '#c78665', fontSize: 28 }}
                onClick={() =>
                  window.open('https://goo.gl/maps/kfMSCytnzgs67rrB9')
                }
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}
