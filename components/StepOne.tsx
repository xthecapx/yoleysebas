import clsx from 'clsx'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import LocationOnIcon from '@mui/icons-material/LocationOn'

function getLinkWhastapp() {
  return (
    'https://api.whatsapp.com/send?phone=+573002686222' +
    '&text=' +
    encodeURIComponent(`Hola, tengo una pregunta del matrimonio #YoleYSebas`)
  )
}

export default function StepOne(): JSX.Element {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <p className="mb-4 sec-description">
        {`Nuestra boda será en un lugar mágico en el desierto de La Guajira, donde queremos compartir contigo la alegría que se desprende de dos palabras: “sí, acepto”.`}
      </p>
      <div className="relative">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {isDesktop && (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1626959.55677631!2d-74.44719914675264!3d10.902344245062135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8c87e8391af1b3%3A0x82c24aeadc0e19e5!2sIpuana%20Virgin%20Beach!5e0!3m2!1ses-419!2sco!4v1640623009512!5m2!1ses-419!2sco"
                allowFullScreen={true}
                loading="lazy"
                height="300"
              ></iframe>
            )}
            <Card
              sx={{
                minWidth: 275,
              }}
              className={clsx('text-center', {
                'absolute top-8 right-2 bottom-2': isDesktop,
                'p-0': !isDesktop,
              })}
            >
              <CardContent>
                {!isDesktop && (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1626959.55677631!2d-74.44719914675264!3d10.902344245062135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8c87e8391af1b3%3A0x82c24aeadc0e19e5!2sIpuana%20Virgin%20Beach!5e0!3m2!1ses-419!2sco!4v1640623009512!5m2!1ses-419!2sco"
                    allowFullScreen={true}
                    loading="lazy"
                    height="200"
                  ></iframe>
                )}
                <Typography
                  sx={{ fontSize: 18, fontWeight: 'bold' }}
                  gutterBottom
                  className={clsx({ 'pt-4': !isDesktop })}
                >
                  {`Ceremonia y recepción:`}
                </Typography>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  Sábado, 30 Abril, 2022
                </Typography>
                <Typography variant="h5" component="div">
                  {`4:30 PM – 2:00 AM`}
                </Typography>
                <Typography sx={{ mb: 1.5 }}>Ipuana Virgin Beach</Typography>
                <IconButton
                  color="primary"
                  component="span"
                  onClick={() =>
                    window.open('https://www.instagram.com/ipuanavirginbeach/')
                  }
                >
                  <i className="ti ti-instagram mr-2" />
                </IconButton>
                <LocationOnIcon
                  sx={{ color: '#c78665', fontSize: 28 }}
                  onClick={() =>
                    window.open('https://goo.gl/maps/3oE5BGc7o73BDvM58')
                  }
                />
                <Typography variant="body2">Mayapo, La Guajira</Typography>
              </CardContent>
              <CardActions>
                <Button
                  className="mx-auto w-full"
                  size="medium"
                  onClick={() => {
                    window.open(getLinkWhastapp())
                  }}
                >
                  ¿Tienes preguntas?
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <style jsx>{`
          .title {
            font-weight: bold;
          }
        `}</style>
      </div>
    </>
  )
}
