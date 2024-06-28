import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAddedItems } from '../context/AddedItemsContext';
import './AddedItems.css';

const AddedItems = () => {
  const { addedItems, removeItem } = useAddedItems();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="added-items">
      <h2>Added Items</h2>
      {addedItems.length === 0 ? (
        <p>No items added yet.</p>
      ) : (
        <ul>
          {addedItems.map((item, index) => (
            <li key={index}>
              <div className="added-item">
                <img src={item.image} alt={item.name} className="added-item-image" />
                <div className="added-item-info">
                  <h3 className="added-item-name">{item.name}</h3>
                  <p className="added-item-price">{item.price}</p>
                </div>
                <button onClick={() => removeItem(item.id)} className="delete-button">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default AddedItems;
