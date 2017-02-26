import React, { PropTypes } from 'react';


function Item({ className, data, onClick }) {
  function itemClick(e, data) {
    const el = e.target;
    const parentEl = el.parentNode;
    const selectedEl = parentEl.querySelector('.selected');

    if (selectedEl) selectedEl.classList.remove('selected');
    el.classList.add('selected');
    onClick(data);
  }

  return (
    <li className={className} onClick={(el) => itemClick(el, data)}>{data.name}</li>
  );
}

Item.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

Item.defaultProps = {
  className: '',
}

export default Item;
