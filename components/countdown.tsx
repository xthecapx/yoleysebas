import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Countdown(): JSX.Element {
  return (
    <div className="ttm-row bg-img1 ttm-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-4 rtl-right flex items-center">
            <div className="message flex items-center">
              <div className="message-icon">
                <FontAwesomeIcon icon={faHeart} />
              </div>
              <div className="message-text flex-1">
                NOS VEMOS EN
                <br />
                <span>#YOLE&amp;SEBAS</span>
                <br />
                MATRIMONIO
              </div>
            </div>
          </div>
          <div className="col-md-8 rtl-left">
            <div className="row countdown">
              <div className="col-md-3">
                <div className="circle">
                  <span className="number">00</span>
                  <p className="label">days</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="circle">
                  <span className="number">00</span>
                  <p className="label">hours</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="circle">
                  <span className="number">00</span>
                  <p className="label">minutes</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="circle">
                  <span className="number">00</span>
                  <p className="label">seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .circle {
          border-radius: 50%;
          border: 1px solid rgb(199, 134, 101);
          height: 125px;
          margin: auto;
          padding: 40px 0 0 0;
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
          width: 60px;
          padding: 5px 10px;
          font-size: 30px;
        }
      `}</style>
    </div>
  )
}
