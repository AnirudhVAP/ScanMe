import React, { useEffect, useState } from "react";
import { useAddedItems } from "../context/AddedItemsContext";
import "./PopupComponent.css";
import { toast } from "react-toastify";

const PopupComponent = ({ setPopup, combinationItem }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addItem, isItemAdded } = useAddedItems();

  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector(".popup-overlay").classList.add("show");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleAddItem = () => {
    if (isItemAdded(combinationItem.id)) {
      toast.info(`${combinationItem.name} is already in the cart!`);
      return;
    }
    addItem(combinationItem);
    toast.success(`${combinationItem.name} added to the cart!`);
  };

  return (
    <div className={`popup-overlay ${imageLoaded ? "show" : ""}`}>
      <div className="popup-content">
        <h1>{combinationItem.name}</h1>
        {!imageLoaded && (
          <div className="image-loading-placeholder">Loading image...</div>
        )}
        <img
          src={combinationItem.image}
          alt={combinationItem.name}
          onLoad={handleImageLoad}
          style={{ display: imageLoaded ? "block" : "none" }}
        />
        <p>Price: {combinationItem.price}</p>
        <div className="popup-buttons">
          <button
            onClick={() => {
              handleAddItem();
              
            }}
          >
            Add
          </button>
          <button onClick={() => setPopup(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
