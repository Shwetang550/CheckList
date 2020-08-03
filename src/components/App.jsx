import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleAddButton() {
    setItems([...items, inputText]);
    setInputText("");
  }

  function handleDeleteItem(item) {
    const newItemList = items.filter((items) => items !== item);
    setItems(newItemList);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={handleAddButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => {
            return (
              <li key={item}>
                {item}{" "}
                <button onClick={() => handleDeleteItem(item)}>
                  <span>X</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
