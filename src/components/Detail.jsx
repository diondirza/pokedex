import React, { PropTypes } from 'react';
import capitalize from 'lodash.capitalize';

function Detail({ data }) {
  return (
    <div className="pokedex-detail">
      <ul className="list">
        <li className="item">
          <div className="label">{data ? capitalize(data.name) : 'Name'}</div>
        </li>
        <li className="item">
          <div className="label">Height</div>
          <div className="text">{data ? data.height : null} ft</div>
        </li>
        <li className="item">
          <div className="label">Weight</div>
          <div className="text">{data ? data.weight : null} lbs</div>
        </li>
        <li className="item">
          <div className="label">Types</div>
          <div className="text">
            {
              data
              ? data.types.map((o, i)=> <div key={i}>{capitalize(o.type.name)}</div>)
              : null
            }
          </div>
        </li>
      </ul>
    </div>
 );
}

Detail.propTypes = {
  data: PropTypes.object,
};

Detail.defaultProps = {
  data: null,
};

export default Detail;
