import React from 'react';
import PropTypes from 'prop-types';
import './ResponsiveTable.css';

const ResponsiveTable = ({ columns, rows }) => {
  const head = () => {
    const cols = Object.keys(columns).map((key) => {
      return (
        <th key={key} data-testid={`th-${key}`} scope="col" style={columns[key].style}>
          {columns[key].title}
        </th>
      );
    });

    return <tr>{cols}</tr>;
  };

  const rws = () => {
    return rows.map((row) => {
      const values = Object.keys(columns).map((colKey) => {
        return (
          <td
            key={`${colKey}-${row.objectID}`}
            data-testid={`td-${colKey}-${row.objectID}`}
            data-label={columns[colKey].title}
            style={columns[colKey].rowStyle}
          >
            {row[colKey]}
          </td>
        );
      });
      return (
        <tr key={row.objectID} data-testid={`tr-${row.objectID}`}>
          {values}
        </tr>
      );
    });
  };

  return (
    <table className="responsive-table">
      <thead>{head()}</thead>
      <tbody>{rws()}</tbody>
    </table>
  );
};

ResponsiveTable.propTypes = {
  columns: PropTypes.shape({
    comments: PropTypes.shape({
      title: PropTypes.string.isRequired,
      style: PropTypes.object,
      rowStyle: PropTypes.object,
    }),
    voteCount: PropTypes.shape({
      title: PropTypes.string.isRequired,
      style: PropTypes.object,
      rowStyle: PropTypes.object,
    }),
    upVote: PropTypes.shape({
      title: PropTypes.string.isRequired,
      style: PropTypes.object,
      rowStyle: PropTypes.object,
    }),
    newsDetails: PropTypes.shape({
      title: PropTypes.string.isRequired,
      style: PropTypes.object,
      rowStyle: PropTypes.object,
    }),
  }).isRequired,
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      comments: PropTypes.number,
      voteCount: PropTypes.number,
      upVote: PropTypes.element,
      newsDetails: PropTypes.element,
      objectID: PropTypes.string,
    }),
  ).isRequired,
};

export default ResponsiveTable;
