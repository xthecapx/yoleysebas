import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from 'react'

const countDownDate = new Date('April 30, 2022 18:00:00').getTime()

function useInterval(callback, delay) {
  const savedCallback = useRef(null)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current()
    }

    if (delay !== null) {
      const id = setInterval(tick, delay)

      return () => clearInterval(id)
    }
  }, [delay])
}

const twoDigits = (num) => String(num).padStart(2, '0')

export default function Countdown(): JSX.Element {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useInterval(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    })

    return () => {
      clearInterval(interval)
    }
  }, 1000)

  return (
    <div className="ttm-row bg-img1 ttm-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-4 rtl-right flex items-center justify-center">
            <div className="message flex items-center">
              <div className="message-text text-center">
                <div className="message-title featured-title text-black">
                  PARA EL GRAN DÍA
                </div>
                <div className="message-title featured-title text-black">
                  FALTAN:
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 rtl-left">
            <div className="row countdown">
              <div className="col-md-3 p-2">
                <div className="circle">
                  <span className="number">{twoDigits(days)}</span>
                  <p className="label">días</p>
                </div>
              </div>
              <div className="col-md-3 p-2">
                <div className="circle">
                  <span className="number">{twoDigits(hours)}</span>
                  <p className="label">horas</p>
                </div>
              </div>
              <div className="col-md-3 p-2">
                <div className="circle">
                  <span className="number">{twoDigits(minutes)}</span>
                  <p className="label">minutos</p>
                </div>
              </div>
              <div className="col-md-3 p-2">
                <div className="circle">
                  <span className="number">{twoDigits(seconds)}</span>
                  <p className="label">segundos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .circle {
          border-radius: 50%;
          border: 3px solid rgb(199, 134, 101);
          height: 125px;
          margin: auto;
          padding: 30px 0 0 0;
          text-align: center;
          width: 125px;

          .number {
            font-size: 25px;
            line-height: 33px;
            margin: 0;
            padding: 0;
          }

          .label {
            font-size: 11px;
            line-height: 24px;
            margin: 0;
            padding: 0;
            text-transform: uppercase;
          }
        }

        .message-icon {
          padding: 5px;
          font-size: 16px;
          color: #c78665;
        }

        .message-title {
          color: #272727;
          font-family: Cormorant;
          font-size: 25px;
        }
      `}</style>
    </div>
  )
}
