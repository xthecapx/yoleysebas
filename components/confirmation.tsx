import { useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Image from 'next/image'
import saveTheDate from '../public/images/savethedate.jpeg'
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
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      allergies: user.allergies,
      confirmed: user.confirmed || user.invites,
      vaccinated: user.vaccinated,
      attend: user.attend,
    },
  })

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
                    {/* <h2>{user.name}</h2> */}
                    <h2 className="title">Nos acompañaras en la boda?</h2>
                  </div>
                </div>
                <form
                  id="request_form"
                  className="request_form wrap-form clearfix"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="row mb-3">
                    <div className="col-lg-12">
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
                              label="Confirmo que estoy disponible para la boda"
                            />
                          )}
                          control={control}
                          name="attend"
                        />
                      </FormGroup>
                    </div>
                  </div>
                  {user.invites > 1 && (
                    <div className="row">
                      <div className="col-lg-12">
                        <label>
                          <span className="text-input">
                            <input
                              type="number"
                              step="1"
                              min="1"
                              max={user.invites}
                              name="confirmed"
                              placeholder="Invitados"
                              {...register('confirmed')}
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                  )}
                  <div className="row mb-3">
                    <div className="col-lg-12">
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
                              label="Estoy vacunado"
                            />
                          )}
                          control={control}
                          name="vaccinated"
                        />
                      </FormGroup>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-12">
                      <TextareaAutosize
                        maxRows={5}
                        minRows={3}
                        aria-label="alergias"
                        placeholder="Alguna alergia en la comida?"
                        {...register('allergies')}
                      />
                    </div>
                  </div>
                  <button
                    className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100"
                    type="submit"
                  >
                    Actualizar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
