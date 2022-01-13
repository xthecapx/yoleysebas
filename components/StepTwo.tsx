import Grid from '@mui/material/Grid'

export default function StepTwo(): JSX.Element {
  return (
    <div className="relative pb-2">
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12}>
          {`Si no sabes cómo transladarte al Ipuana Virgin Beach, te sugerimos
          alquilar un auto o contratar un transporte con una empresa o cooperativa de transporte.`}
        </Grid>
        <Grid item xs={12}>
          {`Si requieres información te puedes contactar con Willy Martinez al siguiente número: 301 759 0648`}
        </Grid>
      </Grid>
    </div>
  )
}
