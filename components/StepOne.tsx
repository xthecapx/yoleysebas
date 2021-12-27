import Grid from '@mui/material/Grid'
import MapFrame from '../public/images/proposal/mapFrame.jpg'
import Image from 'next/image'

export default function StepOne(): JSX.Element {
  return (
    <div className="Step One">
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div className="featured-desc">
            <p>Sábado, 30 Abril, 2022</p>
            <p>4:30 PM – 2:00 AM</p>
            <p>Ipuana Virgin Beach</p>
            <p>Mayapo, La Guajira</p>
            <p>+57 300 268 6222</p>
          </div>
        </Grid>
        <Grid item xs={8}>
          <a
            href="https://goo.gl/maps/a1XgNVnEutpKJkeK6"
            title=""
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={MapFrame}
              alt="Map"
              placeholder="blur"
              quality="90"
              layout="responsive"
            />
          </a>
        </Grid>
      </Grid>
    </div>
  )
}
