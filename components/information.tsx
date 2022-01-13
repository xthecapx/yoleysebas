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
import StepFive from './StepFive'

const steps = [
  {
    label: '¿Dónde será la ceremonia y recepción?',
    description: StepOne,
  },
  {
    label: '¿Dónde hospedarme?',
    description: StepThree,
  },
  {
    label: '¿Cómo llegar?',
    description: StepTwo,
  },
  {
    label: '¿Cúal es el código de vestimenta?',
    description: StepFour,
  },
  {
    label: 'Lluvia de sobres',
    description: StepFive,
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
    <div className="container py-10" id="evento">
      <h5 className="sec-subtitle">GUÍA DEL EVENTO</h5>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} className="step-circle">
            <StepLabel>
              <h5 className="sec-title m-0">{step.label}</h5>
            </StepLabel>
            <StepContent>
              <step.description />
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    className="text-white"
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
            {'Ya estás listo para la fiesta ¡nos vemos en Mayapo!'}
          </Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reiniciar tutorial
          </Button>
        </Paper>
      )}
    </div>
  )
}
