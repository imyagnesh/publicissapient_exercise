/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import useMarkdown from '@hooks/useMarkdown';
import Skeleton from './banner.skeleton';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './banner.module.css';
import '../markdown.module.css';

/* eslint-disable react/no-unescaped-entities */
const Banner = ({ data }) => {
  const { HTML } = useMarkdown(data?.content);

  if (!data) return <Skeleton />;
  return (
    <section
      id="home-box"
      className="home-banner-01"
      style={{
        backgroundImage: `url(${data.backgroundMedia.url.replace(
          'upload/',
          'upload/f_auto,q_70/',
        )})`,
      }}
    >
      <div className="container">
        <div className="row full-screen align-items-center justify-content-center text-center">
          <div className="col col-md-12 col-lg-6 p-80px-tb">
            <div className="home-text-center">
              <div className="markdown" dangerouslySetInnerHTML={{ __html: HTML }} />
              <div className="btn-bar">
                <a
                  className="m-btn m-btn-theme"
                  href={data.buttonLink}
                  aria-label={data.buttonText}
                >
                  {data.buttonText}
                  {/* <FontAwesomeIcon icon="arrow-right" /> */}
                </a>
              </div>
            </div>
            {/*  home-text-center */}
          </div>
          {/*  col */}
        </div>
      </div>
      {/*  container */}
      <a href="#aboutus" data-scroll="smooth" className="mouse-icon hidden-sm" aria-label="wheel">
        <span className="wheel" />
      </a>
    </section>
  );
};

Banner.propTypes = {
  data: PropTypes.shape({
    banner_text: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    backgroundMedia: PropTypes.shape({
      url: PropTypes.string,
    }),
    content: PropTypes.string,
  }).isRequired,
};

export default Banner;
