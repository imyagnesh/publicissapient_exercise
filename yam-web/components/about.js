/* eslint-disable react/no-unescaped-entities */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  return (
    <section id="aboutus" className="section p-0px-b">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="about-left">
              <h2>I'm Yagnesh Modh</h2>
              <h3>I'm a Lead UX & UI designer based in India</h3>
              <p>
                I design and develop services for customers of all sizes, specializing in creating
                stylish, modern websites, web services and online stores.
              </p>
              <p>
                My passion is to design digital user experiences through the bold interface and
                meaningful interactions. Check out my
                <a className="m-btn-link theme-after" href="#portfolio">
                  Portfolio
                </a>
              </p>

              <a className="m-btn m-btn-theme" href="#contact">
                Contact us <FontAwesomeIcon icon="arrow-right" />
              </a>
            </div>
          </div>
          {/* col */}
          <div className="col-md-6 text-center sm-m-45px-t">
            <img src="static/img/man.jpg" title="" alt="" />
          </div>
          {/* col */}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

export default About;
