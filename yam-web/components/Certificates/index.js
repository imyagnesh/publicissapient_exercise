/* eslint-disable react/no-unescaped-entities */

import PropTypes from 'prop-types';

import '../markdown.module.css';

const Certificates = ({ data }) => {
  return (
    <section id="aboutus" className="section gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-4 md-m-15px-b">
            <h2 className="title-style-1 font-alt">Certificates</h2>
          </div>
          {/* col */}
          <div className="col-md-8">
            <If condition={!!data}>
              <ul className="list-style-1">
                <For each="item" of={data}>
                  <li key={item.id} style={{ border: 'none' }}>
                    {item.name}
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

Certificates.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    profilePicture: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};

export default Certificates;
