import React, { useState } from 'react';
import TodoList from './components/TodoList';
import Column from './components/Column';
import { initialItems } from './data';
import './styles/App.css';

const App = () => {
  const [mainList, setMainList] = useState(initialItems);
  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);

  const moveItem = (item, fromList, setFromList, toList, setToList) => {
    setFromList(fromList.filter((i) => i !== item));
    setToList([...toList, item]);

    // Timer to move back to the main list
    setTimeout(() => {
      setToList((prevList) => prevList.filter((i) => i !== item));
      setMainList((prevList) => [...prevList, item]);
    }, 5000);
  };

  const returnToMainList = (item, fromList, setFromList) => {
    setFromList(fromList.filter((i) => i !== item));
    setMainList((prevList) => [...prevList, item]);
  };

  return (
    <div className="app">
      <TodoList
        items={mainList}
        onItemClick={(item) =>
          moveItem(
            item,
            mainList,
            setMainList,
            item.type === 'Fruit' ? fruits : vegetables,
            item.type === 'Fruit' ? setFruits : setVegetables
          )
        }
      />
      <div className="columns">
        <Column
          title="Fruits"
          items={fruits}
          onItemClick={(item) => returnToMainList(item, fruits, setFruits)}
        />
        <Column
          title="Vegetables"
          items={vegetables}
          onItemClick={(item) => returnToMainList(item, vegetables, setVegetables)}
        />
      </div>
    </div>
  );
};

export default App;
