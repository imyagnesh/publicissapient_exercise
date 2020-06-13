import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <section
      id="home-box"
      className="home-banner-01"
      style={{ backgroundImage: 'url(static/img/banner-1.jpg)' }}
    >
      <div className="container">
        <div className="row full-screen align-items-center justify-content-center text-center">
          <div className="col col-md-12 col-lg-6 p-80px-tb">
            <div className="home-text-center">
              <h4 className="font-alt">Hello, my name is</h4>
              <h5 className="font-alt">Yagnesh Modh</h5>
              <p>I'm the pixel crafter based in India. I make the visual to be more interactive.</p>
              <div className="btn-bar">
                <a className="m-btn m-btn-theme" href="#contact">
                  Contact us <FontAwesomeIcon icon="arrow-right" />
                </a>
              </div>
            </div>
            {/*  home-text-center */}
          </div>
          {/*  col */}
        </div>
      </div>
      {/*  container */}
      <a href="#aboutus" data-scroll="smooth" className="mouse-icon hidden-sm">
        <span className="wheel" />
      </a>
    </section>
  );
};

export default Banner;
