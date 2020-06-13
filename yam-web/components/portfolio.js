/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = () => {
  const [iso, setISO] = useState(null);

  useEffect(() => {
    setISO(
      // eslint-disable-next-line jsx-control-statements/jsx-jcs-no-undef
      new Isotope('.portfolio-content', {
        resizable: false,
        itemSelector: '.portfolio-item',
        layoutMode: 'masonry',
        filter: '*',
      }),
    );
  }, []);

  const filter = (e) => {
    iso.arrange({ filter: e.target.getAttribute('data-filter') });
  };

  return (
    <section id="portfolio" className="section gray-bg">
      <div className="container">
        <div className="row justify-content-center m-60px-b md-m-30px-b">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="section-title text-center">
              <h2 className="font-alt">Our Portfolio</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi
              </p>
            </div>
          </div>
        </div>
        <div className="portfolio-filter m-30px-b">
          <ul className="filter text-center">
            <li role="presentation" className="active" data-filter="*" onClick={filter}>
              All
            </li>
            <li role="presentation" data-filter=".website" onClick={filter}>
              Website
            </li>
            <li role="presentation" data-filter=".apps" onClick={filter}>
              Apps
            </li>
          </ul>
        </div>
        {/* Portfolio Filter */}
        <div className="portfolio-content">
          <ul className="portfolio-cols portfolio-cols-3">
            <li className="portfolio-item website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-1.jpg" title="" alt="" />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        className="popup-video theme-color"
                      >
                        <FontAwesomeIcon icon="play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-1.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <FontAwesomeIcon icon="expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <FontAwesomeIcon icon="link" />
                      </a>
                    </div>
                    {/* Video Btn */}
                  </div>
                  {/* Hover */}
                </div>

                <div className="portfolio-info">
                  <h5>Yagnesh Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>
              {/* Portfolio */}
            </li>
            {/* col */}
            <li className="portfolio-item apps">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-2.jpg" title="" alt="" />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        className="popup-video theme-color"
                      >
                        <FontAwesomeIcon icon="play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-2.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <FontAwesomeIcon icon="expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <FontAwesomeIcon icon="link" />
                      </a>
                    </div>
                    {/* Video Btn */}
                  </div>
                  {/* Hover */}
                </div>

                <div className="portfolio-info">
                  <h5>Yagnesh Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>
              {/* Portfolio */}
            </li>
            {/* col */}
            <li className="portfolio-item photoshop apps">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-3.jpg" title="" alt="" />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        className="popup-video theme-color"
                      >
                        <FontAwesomeIcon icon="play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-3.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <FontAwesomeIcon icon="expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <FontAwesomeIcon icon="link" />
                      </a>
                    </div>
                    {/* Video Btn */}
                  </div>
                  {/* Hover */}
                </div>

                <div className="portfolio-info">
                  <h5>Yagnesh Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>
              {/* Portfolio */}
            </li>
            {/* col */}
            <li className="portfolio-item photoshop website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-4.jpg" title="" alt="" />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        className="popup-video theme-color"
                      >
                        <FontAwesomeIcon icon="play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-4.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <FontAwesomeIcon icon="expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <FontAwesomeIcon icon="link" />
                      </a>
                    </div>
                    {/* Video Btn */}
                  </div>
                  {/* Hover */}
                </div>

                <div className="portfolio-info">
                  <h5>Yagnesh Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>{' '}
              {/* Portfolio */}
            </li>
            {/* col */}
            <li className="portfolio-item photoshop apps">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-5.jpg" title="" alt="" />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        className="popup-video theme-color"
                      >
                        <FontAwesomeIcon icon="play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-5.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <FontAwesomeIcon icon="expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <FontAwesomeIcon icon="link" />
                      </a>
                    </div>
                    {/* Video Btn */}
                  </div>
                  {/* Hover */}
                </div>

                <div className="portfolio-info">
                  <h5>Yagnesh Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>
              {/* Portfolio */}
            </li>
            {/* col */}
            <li className="portfolio-item app website">
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <a href="#">
                    <img src="static/img/portfolio-6.jpg" title="" alt="" />
                  </a>
                  <div className="hover">
                    <div className="action-btn">
                      <a
                        href="http://www.youtube.com/watch?v=0O2aH4XLbto"
                        className="popup-video theme-color"
                      >
                        <FontAwesomeIcon icon="play" />
                      </a>
                      <a
                        className="lightbox-gallery theme-color"
                        href="static/img/portfolio-6.jpg"
                        title="Lightbox gallery image title..."
                      >
                        <FontAwesomeIcon icon="expand" />
                      </a>
                      <a href="#" className="theme-color">
                        <FontAwesomeIcon icon="link" />
                      </a>
                    </div>
                    {/* Video Btn */}
                  </div>
                  {/* Hover */}
                </div>

                <div className="portfolio-info">
                  <h5>Yagnesh Portpolio Template</h5>
                  <span>Resent Work</span>
                </div>
              </div>
              {/* Portfolio */}
            </li>
            {/* col */}
          </ul>
          {/* row */}
        </div>
        {/* portfolio content */}
      </div>
      {/* Container */}
    </section>
  );
};

export default Portfolio;
