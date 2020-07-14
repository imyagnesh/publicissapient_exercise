import React from 'react';
import PropTypes from 'prop-types';
import loadable from '@loadable/component';
import './NewsDetails.css';

const DateFns = loadable.lib(() => import(/* webpackChunkName: 'date-fns' */ 'date-fns'));

const NewsDetails = ({ hit, onHide }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <span className="mr8 title">{hit.title}</span>
      <If condition={!!hit.url}>
        <a href={hit.url} rel="noreferrer" target="_blank" className="mr8">
          {`(${hit.url})`}
        </a>
      </If>
      <If condition={!!hit.author}>
        <span className="mr8 fs1 clrGray">by</span>
        <span className="mr8 fs1">{hit.author}</span>
      </If>
      <If condition={!!hit.created_at}>
        <DateFns>
          {({ formatDistance }) => (
            <span className="mr8 fs1 clrGray">
              {formatDistance(new Date(hit.created_at), new Date(), {
                addSuffix: true,
              })}
            </span>
          )}
        </DateFns>
      </If>
      <span
        role="button"
        tabIndex={0}
        className="btn"
        aria-label={`hide hit of ${hit.objectID}`}
        data-testid={`hideBtn-${hit.objectID}`}
        onKeyDown={() => onHide(hit.objectID)}
        onClick={() => onHide(hit.objectID)}
      >
        [ hide ]
      </span>
    </div>
  );
};

NewsDetails.propTypes = {
  hit: PropTypes.shape({
    title: PropTypes.string,
    url: PropTypes.string,
    author: PropTypes.string,
    created_at: PropTypes.string,
    objectID: PropTypes.string,
  }).isRequired,
  onHide: PropTypes.func.isRequired,
};

export default NewsDetails;
