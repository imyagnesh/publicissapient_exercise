/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from '../Modal/index';

import './services.module.css';
// eslint-disable-next-line no-unused-vars
const Services = ({ data }) => {
  const [modalContent, setModalContent] = useState(null);
  return (
    <section id="services" className="section gray-bg services-section">
      <div className="container">
        <div className="row justify-content-center m-45px-b md-m-25px-b">
          <div className="col-12 col-md-10 col-lg-7">
            <div className="section-title text-center">
              <h2 className="font-alt">{data?.title ?? <Skeleton width={150} />}</h2>
              <p>{data?.description ?? <Skeleton height={16} width="100%" count={2} />}</p>
            </div>
          </div>
        </div>

        <If condition={!!modalContent}>
          <Modal open={!!modalContent} onClose={() => setModalContent(null)}>
            <div className="feature-box-02" style={{ margin: 0 }}>
              <span className="icon theme-bg">
                <FontAwesomeIcon icon={modalContent.icon} />
              </span>
              <div>
                <h5>{modalContent.title}</h5>
                <p>{modalContent.description}</p>
              </div>
            </div>
          </Modal>
        </If>
        {/* row */}
        <div className="row">
          <Choose>
            <When condition={data}>
              <For each="item" of={data.servicesList}>
                <div
                  className="col-12 col-md-6 col-lg-4"
                  key={item.id}
                  role="button"
                  onClick={() => setModalContent(item)}
                >
                  <div className="feature-box-02">
                    <span className="icon theme-bg">
                      <FontAwesomeIcon icon={item.icon} />
                    </span>
                    <div>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                      <div className="read-more">
                        <a href="#" className="more-btn">
                          Read More
                          <FontAwesomeIcon icon="arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* feature-box-02 */}
                </div>
              </For>
            </When>
            <Otherwise>
              <For each="item" of={[...Array(6).keys()]}>
                <div className="col-12 col-md-6 col-lg-4" key={item.id}>
                  <div className="feature-box-02">
                    <Skeleton height={100} width={100} circle style={{ marginBottom: 30 }} />
                    <div>
                      <h5>
                        <Skeleton height={16} width="50%" />
                      </h5>
                      <p>
                        <Skeleton height={14} count={4} />
                      </p>
                      <div className="read-more">
                        <Skeleton height={24} width={80} />
                      </div>
                    </div>
                  </div>
                  {/* feature-box-02 */}
                </div>
              </For>
            </Otherwise>
          </Choose>
          {/* col */}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

export default Services;
