import React, { useState } from 'react';
import './List.css';

const List = ({ id, title, price, budgetData, setBudgetData }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedPrice, setEditedPrice] = useState(price);

  const handleDelete = (id) => {
    let newBudgetData = budgetData.filter((data) => data.id !== id);
    setBudgetData(newBudgetData);
  };

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleEditPrice = (e) => {
    setEditedPrice(e.target.value);
  };

  const handleSubmit = () => {
    let newBudgetData = budgetData.map((data) => {
      if (data.id === id) {
        data.title = editedTitle;
        data.price = Number(editedPrice);
      }
      return data;
    });
    setBudgetData(newBudgetData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="list">
        <input value={editedTitle} onChange={handleEditChange} autoFocus />
        <input value={editedPrice} onChange={handleEditPrice} />
        <button onClick={() => setIsEditing(false)}>x</button>
        <button onClick={handleSubmit}>save</button>
      </div>
    );
  } else {
    return (
      <div className="list" key={id}>
        <span>{title}</span>
        <span>{price}</span>
        <button className="editBtn" onClick={() => setIsEditing(true)}>
          edit
        </button>
        <button onClick={() => handleDelete(id)}>x</button>
      </div>
    );
  }
};

export default List;
