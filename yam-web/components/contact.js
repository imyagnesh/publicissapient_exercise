import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <section id="contact" className="section p-0px-b contact-section">
      <div className="container">
        <div className="row justify-content-center m-60px-b md-m-40px-b">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="section-title text-center">
              <h2 className="font-alt">Contact Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi{' '}
              </p>
            </div>
          </div>
        </div>

        <div className="contact-us-box">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="contact-info-box">
                <h2>get in touch</h2>
                <p className="desc">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
                <div className="contact-info">
                  <span className="icon theme-bg">
                    <FontAwesomeIcon icon="directions" />
                  </span>
                  <p>
                    301 The Greenhouse,
                    <br /> London, E2 8DY.
                  </p>
                </div>

                <div className="contact-info">
                  <span className="icon theme-bg">
                    <FontAwesomeIcon icon="envelope" />
                  </span>
                  <p>
                    info@example.com
                    <br />
                    support@example.com
                  </p>
                </div>

                <div className="contact-info">
                  <span className="icon theme-bg">
                    <FontAwesomeIcon icon="mobile-alt" />
                  </span>
                  <p>
                    +1 800-222-000,
                    <br /> +44 800-222-000
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/* Contact Form */}
              <div className="contact-form">
                <h2>Say Something</h2>
                <form>
                  <div className="form-group">
                    <input name="Phone" placeholder="Name" className="form-control" type="text" />
                  </div>
                  <div className="form-group">
                    <input
                      name="Email"
                      placeholder="Emaile"
                      className="form-control"
                      type="email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      name="Subject"
                      placeholder="Subject"
                      className="form-control"
                      type="text"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      name="comment"
                      placeholder="Describe your project"
                      rows="3"
                      className="form-control"
                    />
                  </div>
                  <div className="send">
                    <button type="button" className="m-btn m-btn-theme">
                      Send
                    </button>
                  </div>
                </form>
              </div>
              {/* / */}
            </div>
          </div>
        </div>
      </div>{' '}
      {/* Container */}
    </section>
  );
};

export default Contact;
