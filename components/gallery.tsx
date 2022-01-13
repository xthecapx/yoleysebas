import { useState } from 'react'
import NextImage from 'next/image'
import Slider from './slider'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import Close from '@mui/icons-material/Close'
import { useTheme } from '@mui/material/styles'
import { IMAGES } from './Images'

const lengths = IMAGES.map((chunk) => chunk.length)

export default function Gallery(): JSX.Element {
  const [open, setOpen] = useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [selected, setSelected] = useState({ column: 0, row: 0 })
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const prev = lengths.reduce((acc, length, index) => {
    if (index >= selected.column) {
      return acc
    }

    return acc + length
  }, 0)

  const index = prev + selected.row

  return (
    <div className="gallery" id="gallery">
      <div className="container">
        <h5 className="sec-subtitle">FOTOS DE NUESTRO COMPROMISO</h5>
        <h2 className="sec-title">Momentos destacados</h2>
        <p className="mb-4 sec-description">{`En este hermoso día, con el caribe inmenso de cómplice, decidimos dar el siguiente paso en nuestra relación.`}</p>
        <div className="image-row">
          {IMAGES.map((chunk, column) => (
            <div key={column} className="image-column">
              {chunk.map((image, row) => (
                <NextImage
                  key={row}
                  src={image}
                  alt="Main Image"
                  placeholder="blur"
                  quality="90"
                  className="image-zoom"
                  onClick={() => {
                    handleOpen()
                    setSelected({ column, row })
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle className="flex justify-end">
          <IconButton
            color="primary"
            aria-label="close modal"
            component="span"
            onClick={handleClose}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Slider images={IMAGES.flat()} index={index} />
        </DialogContent>
      </Dialog>
      <style jsx>{`
        .gallery {
          padding: 15px;
        }

        .image-row {
          display: -ms-flexbox; /* IE10 */
          display: flex;
          -ms-flex-wrap: wrap; /* IE10 */
          flex-wrap: wrap;
          padding: 0 4px;
        }

        /* Create four equal columns that sits next to each other */
        .image-column {
          -ms-flex: 25%; /* IE10 */
          flex: 25%;
          max-width: 25%;
          padding: 0 4px;
        }

        .image-column > span {
          margin-top: 8px;
          vertical-align: middle;
          width: 100%;
        }

        /* Responsive layout - makes a two column-layout instead of four columns */
        @media screen and (max-width: 800px) {
          .image-column {
            -ms-flex: 50%;
            flex: 50%;
            max-width: 50%;
          }
        }

        /* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
        @media screen and (max-width: 600px) {
          .image-column {
            -ms-flex: 100%;
            flex: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
