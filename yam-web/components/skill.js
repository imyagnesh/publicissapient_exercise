/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skill = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const bounding = sectionRef.current.getBoundingClientRect();
      const progressbars = document.querySelectorAll('.progress .progress-bar');
      if (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        progressbars.forEach((ele) => {
          const element = ele;
          const progressWidth = `${element.getAttribute('aria-valuenow')}%`;
          element.style.width = progressWidth;
        });
      } else {
        progressbars.forEach((ele) => {
          const element = ele;
          element.style.width = 0;
        });
      }
    };
    document.addEventListener('scroll', onScroll, false);
    return () => {
      document.removeEventListener('scroll', onScroll, false);
    };
  }, []);

  return (
    <section id="aboutus" className="section skill-section" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="skill-left p-80px-r md-p-40px-r sm-p-0px-r sm-m-30px-b">
              <h3 className="font-alt">Make beauty Things With Passion.</h3>
              <p className="m-40px-b">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a href="#" className="m-btn m-btn-theme">
                Read More <FontAwesomeIcon icon="arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skills p-t-10px-sm">
              <div className="progress-lt">
                <h6>HTML</h6>
                <span>92%</span>
                <div className="progress">
                  <div
                    className="progress-bar theme-g-bg"
                    role="progressbar"
                    aria-valuenow="92"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>CSS</h6>
                <span>84%</span>
                <div className="progress">
                  <div
                    className="progress-bar theme-g-bg"
                    role="progressbar"
                    aria-valuenow="84"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
              <div className="progress-lt">
                <h6>JavaScript</h6>
                <span>88%</span>
                <div className="progress">
                  <div
                    className="progress-bar theme-g-bg"
                    role="progressbar"
                    aria-valuenow="88"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}

              <div className="progress-lt">
                <h6>PHp</h6>
                <span>95%</span>
                <div className="progress">
                  <div
                    className="progress-bar theme-g-bg"
                    role="progressbar"
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  />
                  {/* /progress-bar */}
                </div>
                {/* /progress */}
              </div>
              {/* /progress-lt */}
            </div>
          </div>{' '}
          {/* col */}
        </div>{' '}
        {/* row */}
      </div>{' '}
      {/* container */}
    </section>
  );
};

export default Skill;
