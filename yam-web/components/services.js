/* eslint-disable jsx-a11y/anchor-is-valid */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
  return (
    <section id="services" className="section gray-bg services-section">
      <div className="container">
        <div className="row justify-content-center m-45px-b md-m-25px-b">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="section-title text-center">
              <h2 className="font-alt">My Services</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi
              </p>
            </div>
          </div>
        </div>
        {/* row */}
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="feature-box-02">
              <span className="icon theme-bg">
                <FontAwesomeIcon icon="code" />
              </span>
              <div>
                <h5>Development</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="read-more">
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* feature-box-02 */}
          </div>
          {/* col */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="feature-box-02">
              <span className="icon theme-bg">
                <FontAwesomeIcon icon="palette" />
              </span>
              <div>
                <h5>Graphic</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="read-more">
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* feature-box-02 */}
          </div>
          {/* col */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="feature-box-02">
              <span className="icon theme-bg">
                <FontAwesomeIcon icon="image" />
              </span>
              <div>
                <h5>Web Design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="read-more">
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon iicon={['fas', 'arrow-right']} />
                  </a>
                </div>
              </div>
            </div>
            {/* feature-box-02 */}
          </div>
          {/* col */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="feature-box-02">
              <span className="icon theme-bg">
                <FontAwesomeIcon icon="camera-retro" />
              </span>
              <div>
                <h5>Photography</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="read-more">
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* feature-box-02 */}
          </div>
          {/* col */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="feature-box-02">
              <span className="icon theme-bg">
                <FontAwesomeIcon icon={['fab', 'internet-explorer']} />
              </span>
              <div>
                <h5>Web design</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="read-more">
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* feature-box-02 */}
          </div>
          {/* col */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="feature-box-02">
              <span className="icon theme-bg">
                <FontAwesomeIcon icon={['fab', 'app-store-ios']} />
              </span>
              <div>
                <h5>Mobile apps</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="read-more">
                  <a href="#" className="more-btn">
                    Read More <FontAwesomeIcon icon="arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* feature-box */}
          </div>
          {/* col */}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

export default Services;
