/* eslint-disable jsx-a11y/anchor-is-valid */

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skeleton from 'react-loading-skeleton';
import BlogList from '../BlogList';

const Blog = ({ data }) => {
  return (
    <section id="blog" className="section blog-section gray-bg">
      <div className="container">
        <div className="row justify-content-center m-60px-b md-m-25px-b">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="section-title text-center">
              <h2 className="font-alt">{data?.title ?? <Skeleton width={150} />}</h2>
              <p>{data?.description ?? <Skeleton height={16} width="100%" count={2} />}</p>
            </div>
          </div>
        </div>

        <If condition={!!data?.blogs}>
          <BlogList data={data} />
        </If>

        <div className="d-flex justify-content-center m-50px-t md-m-25px-t">
          <a className="m-btn m-btn-theme" href="">
            View More Posts
            {/* <FontAwesomeIcon icon="arrow-right" /> */}
          </a>
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default Blog;
