/* eslint-disable jsx-a11y/anchor-is-valid */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Blog = () => {
  return (
    <section id="blog" className="section blog-section gray-bg">
      <div className="container">
        <div className="row justify-content-center m-60px-b md-m-25px-b">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="section-title text-center">
              <h2 className="font-alt">Latest News</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="blog-item md-m-15px-tb">
              <a href="#">
                <img src="static/img/blog-img2.jpg" title="Yagnesh" alt="Yagnesh" />
              </a>
              <div className="blog-content">
                <div className="post-meta">
                  By <a href="#">John Doe</a> <span>03.02.2018</span>
                </div>
                {/* /post-meta */}

                <h4>
                  <a className="theme-color" href="#">
                    Lorem ipsum dolor sit amet.
                  </a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="more-btn">
                  Read More <FontAwesomeIcon icon="arrow-right" />
                </a>
              </div>
              {/* /blog-content */}
            </div>
            {/* Blog Item */}
          </div>
          <div className="col-md-4 md-m-15px-tb">
            <div className="blog-item">
              <a href="#">
                <img src="static/img/blog-img3.jpg" title="Yagnesh" alt="Yagnesh" />
              </a>
              <div className="blog-content">
                <div className="post-meta">
                  By <a href="#">John Doe</a> <span>03.02.2018</span>
                </div>
                {/* /post-meta */}

                <h4>
                  <a className="theme-color" href="#">
                    Lorem ipsum dolor sit amet.
                  </a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="more-btn">
                  Read More <FontAwesomeIcon icon="arrow-right" />
                </a>
              </div>
              {/* /blog-content */}
            </div>
            {/* Blog Item */}
          </div>

          <div className="col-md-4 md-m-15px-tb">
            <div className="blog-item">
              <a href="#">
                <img src="static/img/blog-img4.jpg" title="Yagnesh" alt="Yagnesh" />
              </a>
              <div className="blog-content">
                <div className="post-meta">
                  By <a href="#">John Doe</a> <span>03.02.2018</span>
                </div>
                {/* /post-meta */}

                <h4>
                  <a className="theme-color" href="#">
                    Lorem ipsum dolor sit amet.
                  </a>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="more-btn">
                  Read More <FontAwesomeIcon icon="arrow-right" />
                </a>
              </div>
              {/* /blog-content */}
            </div>
            {/* Blog Item */}
          </div>
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default Blog;
