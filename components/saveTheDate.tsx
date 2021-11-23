import Image from 'next/image'
import SaveTheDateImage from '../public/images/proposal/proposal6.jpeg'

export default function SaveTheDate(): JSX.Element {
  return (
    <section className="ttm-row broken-section bg-layer-equal-height bg-img1 ttm-bg ttm-bgimage-yes">
      <div className="container max-w-screen-lg md:mx-auto">
        <div className="row mt_195 res-991-mt-60">
          <div className="col-lg-6 col-md-12">
            <Image
              src={SaveTheDateImage}
              alt="Save the date image"
              placeholder="blur"
              quality="90"
              layout="responsive"
              className="ttm-equal-height-image"
            />
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="ttm-col-bgcolor-yes ttm-bg ttm-bgcolor-skincolor spacing-3 h-auto">
              <div className="layer-content">
                <div className="ttm-col-bgcolor-yes ttm-bgcolor-white ttm-col-bgimage-yes col-bg-img-six ttm-bg">
                  <div className="layer-content">
                    <div className="ttm-invitationcard-box text-center">
                      <p className="ttm-top-heading">Save the date</p>
                      <h2 className="ttm-groom-name">Yole</h2>
                      <h5 className="ttm-invitation-separator">y</h5>
                      <h2>Sebas</h2>
                      <p className="ttm-card-date">30. Abril 2021</p>

                      <a
                        className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor mt-3"
                        href="https://goo.gl/maps/a1XgNVnEutpKJkeK6"
                        title=""
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ipuana Virgin Beach
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
