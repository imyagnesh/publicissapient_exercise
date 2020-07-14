/* eslint-disable react/no-unescaped-entities */

import PropTypes from 'prop-types';

import classNames from 'classnames';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMarkdown from '@hooks/useMarkdown';
import Skeleton from 'react-loading-skeleton';
import './about.module.css';
import '../markdown.module.css';

const About = ({ data }) => {
  const { HTML } = useMarkdown(data?.content);
  return (
    <section id="aboutus" className="section p-0px-b">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <Choose>
              <When condition={HTML}>
                <div
                  className={classNames('about-left', 'markdown')}
                  dangerouslySetInnerHTML={{ __html: HTML }}
                />
              </When>
              <Otherwise>
                <div className={classNames('about-left', 'markdown')}>
                  <h2>
                    <Skeleton height={24} width="50%" />
                  </h2>
                  <h3>
                    <Skeleton height={16} width="70%" />
                  </h3>
                  <p>
                    <Skeleton height={15} width="100%" count={3} />
                  </p>
                  <p>
                    <Skeleton height={15} width="100%" count={2} />
                  </p>
                </div>
              </Otherwise>
            </Choose>
            <div className="about-left">
              <Choose>
                <When condition={data?.buttonText && data?.buttonLink}>
                  <a
                    className="m-btn m-btn-theme"
                    aria-label={data.buttonText}
                    href={data.buttonLink}
                  >
                    {data.buttonText}
                    {/* <FontAwesomeIcon icon="arrow-right" /> */}
                  </a>
                </When>
                <Otherwise>
                  <Skeleton height={45} width={165} style={{ borderRadius: 45 }} />
                </Otherwise>
              </Choose>
            </div>
          </div>
          {/* col */}
          <div className="col-md-6 text-center sm-m-45px-t">
            <Choose>
              <When condition={HTML}>
                <img
                  className="lazyload"
                  data-src={data.profilePicture.url.replace('upload/', 'upload/f_auto,q_70,w_320/')}
                  title="Profile Picture"
                  alt="Profile avatar"
                />
              </When>
              <Otherwise>
                <Skeleton height={500} width={300} />
              </Otherwise>
            </Choose>
          </div>
          {/* col */}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    profilePicture: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};

export default About;
