import Grid from '@mui/material/Grid'

export default function StepThree(): JSX.Element {
  return (
    <div className="relative">
      <Grid container spacing={3}>
        <Grid item xs={12} className="text-justify">
          {`Te puedes hospedar en Mayapo o en Rioacha (Aproximadamente 31 kilometros del Ipuana Virgin Beach)`}
          <br />
          {`Si eliges alojarte en Mayapo, puedes encontrar desde hostales o puedes alojarte en el hotel del evento.`}
        </Grid>
      </Grid>
    </div>
  )
}
