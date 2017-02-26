import React, { PropTypes } from 'react';
import Item from './Item';

function Filter({ data, onClick, onClear }) {
  function onFilterClick(data) {
    const selectedEl = document.querySelector('.pokedex-list .selected');
    if (selectedEl) selectedEl.classList.remove('selected');
    onClick(data);
  }

  function onFilterClear() {
    const selectedEls = document.querySelectorAll('.selected');
    selectedEls.forEach(el => el.classList.remove('selected'));
    onClear();
  }

  return (
    <section className="pokedex-filter">
      <h4 className="title">
        Filter
        <span className="clear" onClick={onFilterClear}>clear</span>
      </h4>
      <ul className="list">
        {
          data ? data.map((obj, idx) =>
            <Item key={idx} className="item" data={obj} onClick={onFilterClick} />
          ) : null
        }
      </ul>
    </section>
  );
}

Filter.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  onClear: PropTypes.func,
};

Filter.defaultProps = {
  onClick: () => {},
  onClear: () => {},
}

export default Filter;
