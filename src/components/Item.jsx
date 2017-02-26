import React, { PropTypes } from 'react';


function Item({ className, data, onClick }) {
  function itemClick(el, data) {
    const selectedEls = document.querySelectorAll('.selected');

    selectedEls.forEach(el => el.classList.remove('selected'));
    el.target.classList.add('selected');
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
