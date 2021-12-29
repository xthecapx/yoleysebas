import Grid from '@mui/material/Grid'
import Image from 'next/image'
import men from '../public/images/proposal/men.jpg'
import men2 from '../public/images/proposal/men2.jpg'
import women from '../public/images/proposal/women.jpg'
import women2 from '../public/images/proposal/women2.jpg'

export default function StepFour(): JSX.Element {
  return (
    <div className="relative">
      <Grid container spacing={3}>
        <Grid item xs={6} className="text-center">
          <Grid container spacing={5}>
            <Grid item xs={12}>{`Guayabera blanca manga larga`}</Grid>
            <Grid item xs={6}>
              <Image
                src={men}
                alt="Hombre 1"
                placeholder="blur"
                quality="90"
                layout="responsive"
              />
            </Grid>
            <Grid item xs={6}>
              <Image
                src={men2}
                alt="Hombre 2"
                placeholder="blur"
                quality="90"
                layout="responsive"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} className="text-center">
          <Grid container spacing={5}>
            <Grid item xs={12}>
              {`Vestido largo tropical (Blanco reservado)`}
            </Grid>
            <Grid item xs={6}>
              <Image
                src={women}
                alt="Mujer 1"
                placeholder="blur"
                quality="90"
                layout="responsive"
              />
            </Grid>
            <Grid item xs={6}>
              <Image
                src={women2}
                alt="Mujer 2"
                placeholder="blur"
                quality="90"
                layout="responsive"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
