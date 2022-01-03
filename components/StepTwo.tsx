import Grid from '@mui/material/Grid'
import Image from 'next/image'
import carro from '../public/images/proposal/logocarro.png'

export default function StepTwo(): JSX.Element {
  return (
    <div className="relative">
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={5} className="text-center">
          <Image
            src={carro}
            alt="Logo transporte"
            placeholder="blur"
            quality="90"
            layout="responsive"
          />
        </Grid>
        <Grid item xs={7}>
          Si no sabes cómo transladarte al Ipuana Virgin Beach, te sugerimos
          contratar transporte con: Transporte Calderon
          <br />
          Transporte Calderon SA Teléfono: 112312312312
        </Grid>
      </Grid>
    </div>
  )
}
