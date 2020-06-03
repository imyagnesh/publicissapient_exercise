/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './ResponsiveTable.css';

const ResponsiveTable = ({ columns, rows }) => {
  const head = () => {
    const cols = Object.keys(columns).map((key) => {
      return (
        <th key={key} scope="col" style={columns[key].style}>
          {columns[key].title}
        </th>
      );
    });

    return <tr>{cols}</tr>;
  };

  const rws = () => {
    return rows.map((row, index) => {
      const values = Object.keys(columns).map((colKey) => {
        return (
          <td
            // eslint-disable-next-line react/no-array-index-key
            key={`${colKey}-${index}`}
            data-label={columns[colKey].title}
            style={columns[colKey].rowStyle}
          >
            {row[colKey]}
          </td>
        );
      });
      return <tr>{values}</tr>;
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
  columns: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
};

export default ResponsiveTable;
