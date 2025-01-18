import React from 'react';

const Column = ({ title, items, onItemClick }) => {
  return (
    <div className="column">
      <h3>{title}</h3>
      {items.map((item, index) => (
        <button key={index} onClick={() => onItemClick(item)}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Column;
