import Grid from '@mui/material/Grid'
import Image from 'next/image'
import men from '../public/images/proposal/men.jpg'
import men2 from '../public/images/proposal/men2.jpg'
import women from '../public/images/proposal/w.jpg'
import women2 from '../public/images/proposal/w2.jpg'

export default function StepFour(): JSX.Element {
  return (
    <>
      <p className="mb-4 sec-description">
        {`Es importante estar cómodos, ten en cuenta que bailaremos hasta el amanecer. Sugerimos a las mujeres usar tacón corrido.`}
      </p>
      <div className="relative">
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} className="text-center">
            <Grid container>
              <Grid item xs={12}>
                <h5 className="step-title mx-0">{`Ellos:`}</h5>
              </Grid>
              <Grid
                item
                xs={12}
                className="mb-3"
              >{`Guayabera blanca manga larga`}</Grid>
              <Grid
                item
                xs={6}
                maxHeight={350}
                height={350}
                className="overflow-hidden relative"
              >
                <Image
                  src={men}
                  alt="Hombre 1"
                  placeholder="blur"
                  quality="90"
                  layout="fill"
                  objectFit="cover"
                />
              </Grid>
              <Grid
                item
                xs={6}
                maxHeight={350}
                height={350}
                className="overflow-hidden relative"
              >
                <Image
                  src={men2}
                  alt="Hombre 2"
                  placeholder="blur"
                  quality="90"
                  layout="fill"
                  objectFit="cover"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className="text-center">
            <Grid container>
              <Grid item xs={12}>
                <h5 className="step-title mx-0">{`Ellas:`}</h5>
              </Grid>
              <Grid item xs={12} className="mb-3">
                {`Vestido largo tropical (Blanco reservado)`}
              </Grid>
              <Grid
                item
                xs={6}
                maxHeight={350}
                height={350}
                className="overflow-hidden relative"
              >
                <Image
                  src={women}
                  alt="Mujer 1"
                  placeholder="blur"
                  quality="90"
                  layout="fill"
                  objectFit="contain"
                />
              </Grid>
              <Grid
                item
                xs={6}
                maxHeight={350}
                height={350}
                className="overflow-hidden relative"
              >
                <Image
                  src={women2}
                  alt="Mujer 2"
                  placeholder="blur"
                  quality="90"
                  layout="fill"
                  objectFit="cover"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  )
}
