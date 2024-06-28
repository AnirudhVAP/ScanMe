import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AddedItemsProvider } from './components/context/AddedItemsContext';
import ItemDetails from './components/ItemDetails/ItemDetails';
import LandingPage from './pages/LandingPage/Landingpage'
import AddedItems from './components/AddedItems/AddedItems';

const App = () => {
  return (
    <AddedItemsProvider>
      
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="/menu/:id" element={<ItemDetails />} />
          <Route path="/added-items" element={<AddedItems />} />
        </Routes>
     
    </AddedItemsProvider>
  );
};

export default App;
