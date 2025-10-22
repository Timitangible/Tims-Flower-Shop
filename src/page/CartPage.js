import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "../redux/cartSlice";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <>
      <Header />
      <div className="cart-page">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Plant</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} width="50" />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                    <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p>Total Items: {totalItems}</p>
        <p>Total Cost: ${totalCost.toFixed(2)}</p>
        <button onClick={() => alert("Coming Soon!")}>Checkout</button>
        <button onClick={() => navigate("/products")}>Continue Shopping</button>
      </div>
    </>
  );
}

export default CartPage;
