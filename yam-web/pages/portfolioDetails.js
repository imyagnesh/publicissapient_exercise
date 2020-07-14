import Layout from '@components/layout';
import Head from 'next/head';
import Carousel from 'react-bootstrap/Carousel';
import { CMS_NAME } from '@constants';
import usePortfolio from '../hooks/usePortfolio';

const PortfolioDetails = () => {
  const { data, error } = usePortfolio();
  if (error) return <div>failed to load</div>;
  return (
    <Layout footerStyle={{ marginTop: 0, paddingTop: 50 }}>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <section className="page-title" style={{ backgroundColor: 'black' }}>
        <div className="container">
          <h1 className="font-alt">Project Details</h1>
        </div>
        {/* container */}
      </section>

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <Carousel indicators={false}>
                <For each="item" of={data?.projects[2].images || []}>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item.url.replace('upload/', 'upload/c_fill/c_scale,w_auto,dpr_auto/')}
                      title="Yagnesh"
                      alt="Yagnesh"
                    />
                  </Carousel.Item>
                </For>
              </Carousel>
            </div>
            <div className="col-md-1 m-35px-b" />
            <div className="col-md-6">
              <div className="sidebar-widget">
                <h2
                  style={{
                    fontSize: 35,
                    fontWeight: '600',
                    color: '#151515',
                  }}
                >
                  {data?.projects[2].projectName}
                </h2>
              </div>

              <div className="sidebar-widget">
                <h2 className="title-style-1 font-alt">Role</h2>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#151515',
                  }}
                >
                  {data?.projects[2].role}
                </h3>
              </div>

              <div className="sidebar-widget">
                <h2 className="title-style-1 font-alt">Project Categories</h2>
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
                  </ul>
                </div>
              </div>

              <div className="sidebar-widget">
                <h2 className="title-style-1 font-alt">Technology Used</h2>
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
                <h2 className="title-style-1 font-alt">Project Description</h2>
                <p>{data?.projects[2].Description}</p>
              </div>

              <div className="sidebar-widget">
                <h2 className="title-style-1 font-alt">Visit Link</h2>
                <a href={data?.projects[2].link}>{data?.projects[2].link}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioDetails;
