/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
import Layout from '@components/layout';
import { CMS_NAME } from '@constants';

const Posts = () => {
  return (
    <Layout>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <section className="page-title">
        <div className="container">
          <h1 className="font-alt">Blog List</h1>
        </div>
        {/* container */}
      </section>
      {/* / */}

      <section className="section blog-lising">
        <div className="container">
          <div className="row">
            {/* Content area */}
            <div className="col-12 p-50px-r md-p-15px-r">
              <div className="bog-content-area">
                <div className="m-30px-b">
                  <img className="lazyload" data-src="static/img/overlay-1.png" title="" alt="" />
                </div>
                <p>
                  <span className="first-letter">L</span>orem ipsum dolor sit amet, consectetur
                  adipisicing elit, <strong className="theme-color">sed do eiusmod tempor</strong>
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in <u>voluptate velit esse</u> cillum dolore eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui <span className="theme-color">officia deserunt mollit</span> anim id est
                  laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  <strong>
                    <a className="theme-color" href="#">
                      sed do eiusmod
                    </a>
                  </strong>
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>

                <blockquote className="blockquote-left">
                  <p>
                    Lduis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  <label className="parson">- Ryanr</label>
                </blockquote>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
              </div>
              {/* content are */}
              <div className="blog-tag-nav">
                <div className="row">
                  <div className="col-12 col-md-6 align-self-center text-center text-sm-left sm-m-10px-tb">
                    <ul className="list-style-tag">
                      <li>
                        <a href="#">Mrig</a>
                      </li>
                      <li>
                        <a href="#">HTML</a>
                      </li>
                      <li>
                        <a href="#">CSS</a>
                      </li>
                      <li>
                        <a href="#">UI</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-6 text-center text-sm-right align-self-center sm-m-10px-tb">
                    <ul className="social-icons">
                      <li>
                        <a className="facebook" href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a className="twitter" href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a className="google" href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                      <li>
                        <a className="linkedin" href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <div className="blog-comment-area">
                <h2 className="title-style-1 font-alt">Commets 3</h2>
                <ul className="blog-comment">
                  <li>
                    <div className="row">
                      <div className="col-6 col-lg-2 col-md-3 sm-m-15px-b">
                        <img
                          className="lazyload"
                          data-src="static/img/avtar1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="col-lg-10 col-md-9">
                        <a href="#" className="person">
                          Martin Luthar
                        </a>
                        <span className="date">17 APRIL 2018, 2:05 AM</span>
                        <a href="#comment" className="reply">
                          Replay
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </p>
                      </div>
                    </div>
                    <ul className="child-comment">
                      <li>
                        <div className="row">
                          <div className="col-6 col-lg-2 col-md-3 sm-m-15px-b">
                            <img
                              className="lazyload"
                              data-src="static/img/avtar1.jpg"
                              title=""
                              alt=""
                            />
                          </div>
                          <div className="col-lg-10 col-md-9">
                            <a href="#" className="person">
                              Martin Luthar
                            </a>
                            <span className="date">17 APRIL 2018, 2:05 AM</span>
                            <a href="#comment" className="reply">
                              Replay
                            </a>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <div className="row">
                      <div className="col-6 col-lg-2 col-md-3 sm-m-15px-b">
                        <img
                          className="lazyload"
                          data-src="static/img/avtar1.jpg"
                          title=""
                          alt=""
                        />
                      </div>
                      <div className="col-lg-10 col-md-9">
                        <a href="#" className="person">
                          Martin Luthar
                        </a>
                        <span className="date">17 APRIL 2018, 2:05 AM</span>
                        <a href="#comment" className="reply">
                          Replay
                        </a>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div> */}
              {/* <div className="blog-comment-form">
                <h2 className="title-style-1 font-alt">Leave a Reply</h2>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Your Name *</label>
                        <input
                          name="name"
                          placeholder="Enter your full name"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Your Email *</label>
                        <input
                          name="name"
                          placeholder="Enter your email"
                          className="form-control"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Your Comment *</label>
                        <textarea
                          className="form-control"
                          rows="8"
                          id="comment"
                          name="comment"
                          placeholder="Comment here"
                        />
                      </div>
                    </div>
                    <div className="col-md-12 p-10px-t">
                      <button className="m-btn m-btn-theme"> Post Comment </button>
                    </div>
                  </div>
                </form>
              </div> */}
            </div>
            {/* col */}
            {/* side Bar */}
            {/* <div className="col-12 col-md-12 col-lg-3 md-m-30px-b">
              <div className="sidebar-widget">
                <h5 className="widget-title font-alt">SEARCH</h5>
                <div className="widget-search">
                  <form>
                    <input name="name" placeholder="Search" className="form-control" type="text" />
                    <button className="m-btn m-btn-theme">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="sidebar-widget">
                <h5 className="widget-title font-alt">ABOUT ME</h5>
                <div className="widget-about">
                  <div className="avtar">
                    <img className="lazyload" data-src="static/img/team1.jpg" alt="" title="" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
                  </p>
                </div>
              </div>
              <div className="sidebar-widget">
                <h5 className="widget-title font-alt">CATEGORIES</h5>
                <div className="widget-categories">
                  <ul className="list-style-1">
                    <li>
                      <a href="#">Entertainment</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Home Blog</a>
                    </li>
                    <li>
                      <a href="#">Blog Details</a>
                    </li>
                    <li>
                      <a href="#">HTML and CSS</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-widget">
                <h5 className="widget-title font-alt">POPULAR POST</h5>
                <div className="widget-categories">
                  <ul className="latest-post">
                    <li>
                      <div className="lp-img">
                        <img
                          className="lazyload"
                          data-src="static/img/blog-img4.jpg"
                          title="Ryan"
                          alt="Ryan"
                        />
                      </div>
                      <div className="lp-text">
                        <h6>
                          <a href="#">Ryan Awesome Theme For Your Business Website</a>
                        </h6>
                        <div className="date">
                          20 April 2018 | by <a href="#">Ryan</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="lp-img">
                        <img
                          className="lazyload"
                          data-src="static/img/blog-img4.jpg"
                          title="Ryan"
                          alt="Ryan"
                        />
                      </div>
                      <div className="lp-text">
                        <h6>
                          <a href="#">Lorem Ipsum is simply dummy</a>
                        </h6>
                        <div className="date">
                          20 April 2018 | by <a href="#">Ryan</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="lp-img">
                        <img
                          className="lazyload"
                          data-src="static/img/blog-img4.jpg"
                          title="Ryan"
                          alt="Ryan"
                        />
                      </div>
                      <div className="lp-text">
                        <h6>
                          <a href="#">Ryan is an exclusive multi-purpose</a>
                        </h6>
                        <div className="date">
                          20 April 2018 | by <a href="#">Ryan</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-widget">
                <h5 className="widget-title font-alt">ARCHIVE</h5>
                <div className="widget-archive">
                  <ul className="list-style-1">
                    <li>
                      <a href="#">Jan 2018</a>
                    </li>
                    <li>
                      <a href="#">Feb 2018 </a>
                    </li>
                    <li>
                      <a href="#">Mar 2018</a>
                    </li>
                    <li>
                      <a href="#">Apr 2018</a>
                    </li>
                    <li>
                      <a href="#">May 2018</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-widget">
                <h5 className="widget-title font-alt">POPULAR TAGS</h5>
                <div className="widget-popular-tag">
                  <ul className="list-style-tag">
                    <li>
                      <a href="#">Mrig</a>
                    </li>
                    <li>
                      <a href="#">HTML</a>
                    </li>
                    <li>
                      <a href="#">CSS</a>
                    </li>
                    <li>
                      <a href="#">UI</a>
                    </li>
                    <li>
                      <a href="#">One Page</a>
                    </li>
                    <li>
                      <a href="#">Multi</a>
                    </li>
                    <li>
                      <a href="#">Theme</a>
                    </li>
                    <li>
                      <a href="#">Bootstrap</a>
                    </li>
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">UX</a>
                    </li>
                    <li>
                      <a href="#">Wordpress</a>
                    </li>
                    <li>
                      <a href="#">Magento</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-widget">
                <h5 className="widget-title font-alt">NEWSLETTER</h5>
                <div className="widget-newsletter">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <form>
                    <input
                      name="name"
                      placeholder="* Email Address"
                      className="form-control"
                      type="text"
                    />
                    <button className="m-btn m-btn-theme">
                      <i className="fa ti-email icon-small" />
                    </button>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Posts;
