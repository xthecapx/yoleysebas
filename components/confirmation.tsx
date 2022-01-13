import { useForm, Controller } from 'react-hook-form'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Alert from '@mui/material/Alert'
import Switch from '@mui/material/Switch'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Image from 'next/image'
import saveTheDate from '../public/images/savethedate.jpeg'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import { db } from '../firebase/clientApp'

type ConfirmationProps = {
  user: any
  openSnackbar: () => void
}

export default function Confirmation({
  user,
  openSnackbar,
}: ConfirmationProps): JSX.Element {
  const onSubmit = async (data) => {
    const ref = db.collection('guests').doc(user.email)
    await ref.update({
      confirmed: data.confirmed,
      allergies: data.allergies,
      vaccinated: data.vaccinated,
      attend: data.attend,
    })
    openSnackbar()
  }
  const { register, handleSubmit, control, watch } = useForm({
    defaultValues: {
      allergies: user.allergies,
      confirmed: user.confirmed || user.invites,
      vaccinated: user.vaccinated,
      attend: user.attend,
    },
  })

  const watchVaccinated = watch('vaccinated', user.vaccinated)
  const watchAttend = watch('attend', user.attend)

  return (
    <section className="ttm-row bg-img1 ttm-bg" id="confirmation">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <Image
              src={saveTheDate}
              alt="Save the Date"
              placeholder="blur"
              quality="90"
              layout="responsive"
            />
          </div>
          <div className="col-lg-7">
            <div className="col-bg-img-five ttm-col-bgimage-yes ttm-bg ttm-bgcolor-white box-shadow spacing-5">
              <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
              <div className="layer-content">
                <div className="section-title text-center">
                  <div className="title-header">
                    <h2 className="title">{`¿Nos acompañarás en la boda?`}</h2>
                  </div>
                </div>
                <form
                  id="request_form"
                  className="request_form wrap-form clearfix"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row mb-3">
                    <div className="col-lg-12">
                      <h5 className="sec-subtitle mb-2">
                        {'Confirma tu asistencia'}
                      </h5>
                      <FormGroup>
                        <Controller
                          render={({ field }) => (
                            <FormControlLabel
                              value="attend"
                              control={
                                <Switch
                                  checked={field.value}
                                  onChange={field.onChange}
                                  onBlur={field.onBlur}
                                  ref={field.ref}
                                />
                              }
                              label={
                                watchAttend
                                  ? '¡Ajá!, allá estaré'
                                  : 'No puedo asistir'
                              }
                            />
                          )}
                          control={control}
                          name="attend"
                        />
                      </FormGroup>
                    </div>
                  </div>
                  {user.invites > 1 && watchAttend && (
                    <div className="row">
                      <div className="col-lg-12">
                        <FormControl className="w-100 mb-3">
                          <InputLabel id="confirmed">
                            {'¿Cuántos asistentes confirmados para la fiesta?'}
                          </InputLabel>
                          <Controller
                            render={({ field }) => (
                              <Select
                                labelId="confirmed"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                                ref={field.ref}
                              >
                                <MenuItem value={1}>Uno</MenuItem>
                                <MenuItem value={2}>Dos</MenuItem>
                              </Select>
                            )}
                            control={control}
                            name="confirmed"
                          />
                        </FormControl>
                      </div>
                    </div>
                  )}
                  <div className="row mb-3">
                    <div className="col-lg-12">
                      <h5 className="sec-subtitle mb-2">
                        {'¿Estás vacunado?'}
                      </h5>
                      <FormGroup>
                        <Controller
                          render={({ field }) => (
                            <FormControlLabel
                              value="vaccinated"
                              control={
                                <Switch
                                  checked={field.value}
                                  onChange={field.onChange}
                                  onBlur={field.onBlur}
                                  ref={field.ref}
                                />
                              }
                              label={`${
                                watchVaccinated ? 'Sí' : 'No'
                              }, estoy vacunado`}
                            />
                          )}
                          control={control}
                          name="vaccinated"
                        />
                      </FormGroup>
                    </div>
                  </div>
                  {watchVaccinated && (
                    <div className="row mb-3">
                      <div className="col-lg-12">
                        <Alert severity="info">
                          {
                            'Recuerda llevar el carnet de vacunación en físico o digital'
                          }
                        </Alert>
                      </div>
                    </div>
                  )}
                  <div className="row mb-3">
                    <div className="col-lg-12">
                      <h5 className="sec-subtitle mb-2">
                        {
                          '¿Tienes alguna restricción alimentaria (alergias, vegetariano, etc.)?'
                        }
                      </h5>
                      <TextareaAutosize
                        maxRows={5}
                        minRows={3}
                        aria-label="alergias"
                        placeholder="Escribe acá"
                        {...register('allergies')}
                      />
                    </div>
                  </div>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    sx={{ mt: 1, mr: 1 }}
                    className="text-white"
                  >
                    {'Actualizar'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
