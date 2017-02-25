import React, { PropTypes } from 'react';


function ListItem({ data, onClick }) {
  function itemClick(el, data) {
    const selectedEls = document.querySelectorAll('.selected');

    selectedEls.forEach(el => el.classList.remove('selected'));
    el.target.classList.add('selected');
    onClick(data);
  }

  return (
    <li onClick={(el) => itemClick(el, data)}>{data.name}</li>
  );
}

ListItem.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListItem;
