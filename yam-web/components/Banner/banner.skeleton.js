import React from 'react';
import Skeleton from 'react-loading-skeleton';

const BannerSkeleton = () => {
  return (
    <section id="home-box" className="home-banner-01">
      <div className="container">
        <div className="row full-screen align-items-center justify-content-center text-center">
          <div className="col col-md-12 col-lg-6 p-80px-tb">
            <div className="home-text-center">
              <div className="markdown">
                <h4>
                  <Skeleton height={30} width="50%" />
                </h4>
                <h5>
                  <Skeleton height={45} width="70%" />
                </h5>
                <p>
                  <Skeleton height={30} width="80%" count={2} />
                </p>
              </div>
              <div className="btn-bar">
                <Skeleton height={45} width={165} style={{ borderRadius: 45 }} />
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

export default BannerSkeleton;
