import React, { createContext, useContext, useState } from 'react';

const AddedItemsContext = createContext();

export const useAddedItems = () => useContext(AddedItemsContext);

export const AddedItemsProvider = ({ children }) => {
  const [addedItems, setAddedItems] = useState([]);

  const addItem = (item) => {
    setAddedItems((prevItems) => [...prevItems, item]);
  };

  const isItemAdded = (itemId) => {
    return addedItems.some((item) => item.id === itemId);
  };

  const removeItem = (id) => {
    setAddedItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  return (
    <AddedItemsContext.Provider value={{ addedItems, addItem, isItemAdded, removeItem }}>
      {children}
    </AddedItemsContext.Provider>
  );
};
