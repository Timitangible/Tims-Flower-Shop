import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const inCart = cart.find((item) => item.id === plant.id);

  const handleAdd = () => {
    dispatch(addItem(plant));
  };

  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <p>${plant.price.toFixed(2)}</p>
      <button onClick={handleAdd} disabled={!!inCart}>
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default PlantCard;
