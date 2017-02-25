import React, { PropTypes } from 'react';
import ListItem from './ListItem';


function List({ data, onClick }) {
  return (
    <section className="pokedex-list">
      <ul>
      {
        data ? data.map((obj, idx) =>
          <ListItem key={idx} data={obj} onClick={onClick} />
        ) : null
      }
      </ul>
    </section>
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default List;
