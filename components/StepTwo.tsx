import Grid from '@mui/material/Grid'
import Image from 'next/image'
import carro from '../public/images/proposal/logocarro.png'

export default function StepTwo(): JSX.Element {
  return (
    <div className="relative">
      <Grid container spacing={3}>
        <Grid item xs={6} className="text-center">
          <Image
            src={carro}
            alt="Logo transporte"
            placeholder="blur"
            quality="90"
            layout="fixed"
            height="100px"
          />
          <br />
          Transporte Calderon SA Teléfono: 112312312312
        </Grid>
        <Grid item xs={6}>
          Si no sabes cómo transladarte a Ipuana Virgin Beach, te sugerimos
          contratar transporte con: Transporte Calderon
        </Grid>
      </Grid>
    </div>
  )
}
