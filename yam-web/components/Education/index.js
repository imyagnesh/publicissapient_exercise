/* eslint-disable react/no-unescaped-entities */

import PropTypes from 'prop-types';
import format from 'date-fns/format';

import '../markdown.module.css';

const Education = ({ data }) => {
  return (
    <section id="aboutus" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-4 md-m-15px-b">
            <h2 className="title-style-1 font-alt">Education</h2>
          </div>
          {/* col */}
          <div className="col-md-8">
            <If condition={!!data}>
              <ul className="blog-comment">
                <For each="item" of={data}>
                  <li>
                    <div className="row">
                      <div className="col-12">
                        <h3
                          style={{
                            fontSize: 22,
                            fontWeight: '600',
                            color: '#151515',
                            margin: '0 0 20px',
                          }}
                        >
                          {`${item.degree} in ${item.studyField}`}
                        </h3>
                        <a href={item.link} className="person">
                          {item.school}
                        </a>
                        <span className="date">{`${format(
                          new Date(item.startDate),
                          'MMM yyyy',
                        )} - ${format(new Date(item.endDate), 'MMM yyyy')}`}</span>
                        <p>{item.description}</p>
                      </div>
                    </div>
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

Education.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    profilePicture: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};

export default Education;
