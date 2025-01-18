import React from 'react';

const TodoList = ({ items, onItemClick }) => {
  return (
    <div className="main-list">
      <h3>Main List</h3>
      {items.map((item, index) => (
        <button key={index} onClick={() => onItemClick(item)}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default TodoList;
