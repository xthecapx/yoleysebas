import Image from 'next/image'
import ConfirmationImage from '../public/images/proposal/proposal14.jpeg'

export default function Confirmation(): JSX.Element {
  return (
    <section className="ttm-row contact-section">
      <div className="container max-w-screen-lg md:mx-auto">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-7">
                <div className="pt-85 pr-75 res-991-pr-0 res-991-pt-60">
                  <div className="section-title">
                    <div className="title-header">
                      <h5>Welcome To Our Site</h5>
                      <h2 className="title">
                        Lets Plan Your Perfect Wedding For All Your Catering
                        Needs
                      </h2>
                    </div>
                    <div className="title-desc">
                      <p className="pt-5">
                        We offer the best food and drink service as per
                        particular culture and taste Our Team make sure for the
                        best catering arrangements as it is the most important
                        part any wedding ceremony in all over country!
                      </p>
                    </div>
                  </div>
                  <form
                    id="contact_form"
                    className="contact_form wrap-form mt-45 clearfix"
                    method="post"
                    action="#"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <label>
                          <span className="text-input select-text">
                            <select
                              name="orderby"
                              className="select2-hidden-accessible"
                            >
                              <option value="menu_order">
                                Select Your Services
                              </option>
                              <option value="rating">Wedding Stories</option>
                              <option value="date">Planning</option>
                              <option value="price">General</option>
                            </select>
                          </span>
                        </label>
                      </div>
                      <div className="col-lg-12">
                        <label>
                          <span className="text-input">
                            <input
                              name="address"
                              type="text"
                              value=""
                              placeholder="Your Name*"
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <label>
                          <span className="text-input">
                            <input
                              name="phone"
                              type="text"
                              value=""
                              placeholder="Phone*"
                            />
                          </span>
                        </label>
                      </div>
                      <div className="col-lg-6">
                        <label>
                          <span className="text-input">
                            <input
                              name="code"
                              type="text"
                              value=""
                              placeholder="Email*"
                            />
                          </span>
                        </label>
                      </div>
                    </div>
                    <button
                      className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100 mt-5"
                      type="submit"
                    >
                      Send A Request
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="ttm-bgcolor-skincolor pt-10 pb-10 mt_20 res-991-pt-0"></div>
                <div className="ttm_single_image-wrapper text-lg-right text-center res-991-pt-70 res-991-pb-60">
                  <Image
                    src={ConfirmationImage}
                    alt="Confirmation image"
                    placeholder="blur"
                    quality="90"
                    layout="responsive"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
