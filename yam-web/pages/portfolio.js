/* eslint-disable jsx-a11y/anchor-is-valid */
import Head from 'next/head';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '@components/layout';
import { CMS_NAME } from '@constants';
import usePortfolio from '../hooks/usePortfolio';
import PortfolioList from '../components/PortfolioList';

const Portfolio = () => {
  const { data, error } = usePortfolio();

  if (error) return <div>failed to load</div>;
  return (
    <Layout footerStyle={{ marginTop: 0, paddingTop: 50 }}>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <section className="page-title" style={{ backgroundColor: 'black' }}>
        <div className="container">
          <h1 className="font-alt">Portfolio List</h1>
        </div>
        {/* container */}
      </section>

      <section className="section blog-lising">
        <div className="container">
          <div className="row">
            <PortfolioList data={data} />
          </div>

          <div className="bottom-pagination">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex="-1">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
