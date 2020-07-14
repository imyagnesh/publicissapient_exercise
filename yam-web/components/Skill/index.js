/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Skeleton from 'react-loading-skeleton';
import ProgressBar from '../ProgressBar/index';

import './skill.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skill = ({ data }) => {
  return (
    <section id="skill" className="section skill-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="skill-left p-80px-r md-p-40px-r sm-p-0px-r sm-m-30px-b">
              <h3 className="font-alt">{data?.title ?? <Skeleton />}</h3>
              <p className="m-40px-b">{data?.description ?? <Skeleton count={3} />}</p>
              <Choose>
                <When condition={data?.buttonText}>
                  <a href={data.buttonLink} className="m-btn m-btn-theme">
                    {data.buttonText}
                    {/* <FontAwesomeIcon icon="arrow-right" /> */}
                  </a>
                </When>
                <Otherwise>
                  <Skeleton height={45} width={165} style={{ borderRadius: 45 }} />
                </Otherwise>
              </Choose>
            </div>
          </div>
          <div className="col-md-6">
            <div className="skills p-t-10px-sm">
              <Choose>
                <When condition={data?.skills}>
                  <For each="item" of={data.skills}>
                    <ProgressBar item={item} />
                  </For>
                </When>
                <Otherwise>
                  <For each="item" of={[...Array(4).keys()]}>
                    <div className="progress-lt" key={item.id}>
                      <h6>
                        <Skeleton width={50} />
                      </h6>
                      <span>
                        <Skeleton width={30} />
                      </span>
                      <div>
                        <Skeleton height={6} style={{ borderRadius: 50, marginBottom: 0 }} />
                      </div>
                      {/* /progress-bar */}
                      {/* /progress */}
                    </div>
                  </For>
                </Otherwise>
              </Choose>
              {/* /progress-lt */}
            </div>
          </div>
          {/* col */}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

export default Skill;
