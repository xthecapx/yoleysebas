import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import StepContent from '@mui/material/StepContent'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'

const steps = [
  {
    label: '¿Dónde será el evento y la recepción?',
    description: StepOne,
  },
  {
    label: '¿Cómo llegar?',
    description: StepTwo,
  },
  {
    label: '¿Dónde hospedarme?',
    description: StepThree,
  },
  {
    label: '¿Cúal es el código de vestimenta?',
    description: StepFour,
  },
]

export default function Information(): JSX.Element {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <div className="container" id="evento">
      <h1>Tutorial del evento</h1>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? (
                  <Typography variant="caption">Ultimo paso!</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <step.description />
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1
                      ? 'Finalizar'
                      : 'Siguiente paso'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Paso anterior
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>
            {'Ya estas listo para la fiesta, nos vemo en Mayapo!'}
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reiniciar tutorial
          </Button>
        </Paper>
      )}
    </div>
  )
}
