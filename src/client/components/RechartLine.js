import React from 'react';
import PropTypes from 'prop-types';

import loadable from '@loadable/component';

const Rechart = loadable.lib(() => import(/* webpackChunkName: 'recharts' */ 'recharts'));

const RechartLine = ({ newsList, xDataKey, yDataKey }) => {
  return (
    <Rechart>
      {({ LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Line, Label, ResponsiveContainer }) => (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={newsList}
            margin={{
              top: 10,
              right: 10,
              left: 20,
              bottom: 100,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey={xDataKey} angle={-90} textAnchor="end" verticalAnchor="middle">
              <Label value="ID" position="bottom" offset={50} />
            </XAxis>
            <YAxis
              label={{
                value: 'Votes',
                angle: -90,
                position: 'left',
              }}
            />
            <Tooltip />
            <Line
              dataKey={yDataKey}
              stroke="#366396"
              strokeWidth={4}
              dot={{
                strokeWidth: 6,
                r: 3,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </Rechart>
  );
};

RechartLine.propTypes = {
  xDataKey: PropTypes.string.isRequired,
  yDataKey: PropTypes.string.isRequired,
  newsList: PropTypes.arrayOf(
    PropTypes.shape({
      voteCount: PropTypes.number,
      objectID: PropTypes.string,
    }),
  ).isRequired,
};

export default RechartLine;
