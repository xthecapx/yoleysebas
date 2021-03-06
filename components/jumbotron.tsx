import Image from 'next/image'
import mainImage from '../public/images/proposal/main-image.png'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

export default function Jumbotron(): JSX.Element {
  const theme = useTheme()
  const mobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div className="flex relative">
      <div className="flex-1 main-image">
        <Image
          src={mainImage}
          alt="Main Image"
          placeholder="blur"
          quality="90"
          layout={mobile ? 'fill' : 'responsive'}
        />
      </div>
      <div className="absolute top-0 left-0 message flex content-center items-center">
        <div className="text-center flex-1 text-mobile">
          <h2 className="name">Yole</h2>
          <h5 className="separator">&amp;</h5>
          <h2 className="name">Sebas</h2>
          <p className="text mobile-space">30 &bull; 04 &bull; 2022</p>
          <p className="text">Mayapo &bull; La Guajira</p>
        </div>
      </div>
      <style jsx>{`
        .message {
          width: 52%;
          height: 100%;
        }

        .name {
          color: rgb(39, 39, 39);
          font-family: Cormorant;
          font-size: 50px;
          font-weight: 700;
          letter-spacing: 0px;
          line-height: 80px;
        }

        .separator {
          position: relative;
          color: rgb(199, 134, 101);
          margin-bottom: 5px;
          font-family: Cormorant;
          font-size: 35px;
          line-height: 28px;

          ::before,
          ::after {
            content: '';
            position: relative;
            display: inline-block;
            width: 90px;
            height: 1px;
            background-color: black;
            left: -13px;
            vertical-align: middle;
          }

          ::after {
            left: auto;
            right: -13px;
          }
        }

        .text {
          color: rgb(199, 134, 101);
          font-size: 20px;
        }

        @media (max-width: 1199px) {
          .message {
            background-color: rgb(255, 255, 255, 0.8);
            width: 100%;
          }
        }

        @media (max-width: 640px) {
          .main-image {
            height: 60vh;
          }

          .message {
            background-color: rgb(255, 255, 255, 0.8);
            width: 100%;
          }

          .text {
            font-size: 16px;
          }

          .name {
            font-size: 35px;
            line-height: 40px;
          }

          .separator {
            font-size: 22px;
            line-height: 16px;
          }

          .hideme {
            display: none;
          }

          .mobile-space {
            margin-top: 10px;
          }
        }

        @media (min-width: 640px) {
          .mobile-space {
            margin-top: 10px;
          }
        }
      `}</style>
    </div>
  )
}
