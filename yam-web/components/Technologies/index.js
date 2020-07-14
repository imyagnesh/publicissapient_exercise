/* eslint-disable react/no-unescaped-entities */

import PropTypes from 'prop-types';

import '../markdown.module.css';
import ProgressBar from '../ProgressBar';

const Technologies = ({ data }) => {
  return (
    <section id="aboutus" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 md-m-15px-b">
            <h2 className="title-style-1 font-alt">Technologies</h2>
          </div>
          {/* col */}
          <div className="col-md-8">
            <div className="row">
              <If condition={!!data}>
                <For each="item" of={data}>
                  <div className="col-md-6">
                    <ProgressBar item={item} />
                  </div>
                </For>
              </If>
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

Technologies.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    profilePicture: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};

export default Technologies;
