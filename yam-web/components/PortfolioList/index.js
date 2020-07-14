import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './portfolioList.module.css';

const PortfolioList = ({ data }) => {
  return (
    <ul className="portfolio-cols portfolio-cols-3">
      <Choose>
        <When condition={data?.projects}>
          <For each="item" of={data.projects}>
            <li className="portfolio-item" key={item.id}>
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  <img
                    className="lazyload d-block w-100"
                    style={{ height: 240 }}
                    data-src={
                      item.images
                        .find((x) => x.name === 'cover')
                        ?.url.replace(
                          'upload/',
                          'upload/ar_4:3,c_fill/c_scale,w_auto,dpr_auto,q_auto/',
                        ) || 'static/img/placeholder-750x500.png'
                    }
                    title="portfolio Images"
                    alt="portfolio"
                  />
                  <div className="hover">
                    <div className="action-btn">
                      <a className="m-btn m-btn-theme" href="">
                        View Project
                        <FontAwesomeIcon icon="arrow-right" />
                      </a>
                    </div>
                    {/* Video Btn */}
                  </div>
                  {/* Hover */}
                </div>

                <div className="portfolio-info">
                  <h5>{item.projectName}</h5>
                  <span>{item.Description}</span>
                </div>
              </div>
              {/* Portfolio */}
            </li>
          </For>
        </When>
        <Otherwise>
          <For each="item" of={[...Array(6).keys()]}>
            <li className="portfolio-item" key={item.id}>
              <div className="portfolio-col portfolio-hover-01">
                <div className="portfolio-img">
                  {/*  eslint-disable-next-line no-script-url */}
                  <a href="javascript:void(0)" aria-label="portfolio Images">
                    <Skeleton height={250} width="100%" />
                  </a>
                  {/* Hover */}
                </div>

                <div className="portfolio-info">
                  <h5>
                    <Skeleton height={24} width="70%" />
                  </h5>
                  <span>
                    <Skeleton height={16} width="40%" />
                  </span>
                </div>
              </div>
              {/* Portfolio */}
            </li>
          </For>
        </Otherwise>
      </Choose>
      {/* col */}
    </ul>
  );
};

export default PortfolioList;
