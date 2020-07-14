/* eslint-disable react/no-unescaped-entities */

import PropTypes from 'prop-types';

import '../markdown.module.css';

const Achievements = ({ data }) => {
  return (
    <section id="aboutus" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 md-m-15px-b">
            <h2 className="title-style-1 font-alt">Achievements</h2>
          </div>
          {/* col */}
          <div className="col-md-8">
            <If condition={!!data}>
              <ul className="list-style-1">
                <For each="item" of={data}>
                  <li key={item.id} style={{ border: 'none' }}>
                    {item.text}
                  </li>
                </For>
              </ul>
            </If>
          </div>
          {/* col */}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

Achievements.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    profilePicture: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};

export default Achievements;
