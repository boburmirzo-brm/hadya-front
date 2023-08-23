import React from "react";
import "./Cart.css";
import { AiOutlineClose } from "react-icons/ai";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

function Cart() {
  return (
    <div className="cart">
      <table className="container cart__table">
        <thead className="cart__table-thead">
          <th className="cart__table-thead-name">Product name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th></th>
        </thead>
        <tbody className="cart__table-tbody">
          <tr>
            <td className="cart__table-name">
              <div>
                <img
                  src="https://clenu-store-demo.myshopify.com/cdn/shop/products/pro4_65d08cc9-3bc1-4335-ad13-d53c671287b8.jpg?crop=center&height=100&v=1676536072&width=100"
                  alt="Product"
                />

                <span>Product name</span>
              </div>
            </td>
            <td className="cart__table-price">
              <span>Price:</span>
              <span>$15.00</span>
            </td>
            <td className="cart__table-quantity">
              <span>Quantity</span>
              <div className="cart__table-quantity-wrapper">
                <div className="cart__table-quantity-actions">
                  <input type="text" defaultValue={"1"} />
                  <div className="cart__table-quantity-btns">
                    <button>
                      <GoTriangleUp />
                    </button>
                    <button>
                      <GoTriangleDown />
                    </button>
                  </div>
                </div>
              </div>
            </td>
            <td className="cart__table-total">
              <span>Total:</span>
              <span>$32.00</span>
            </td>
            <td>
              <AiOutlineClose />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="cart__buttons container">
        <button className="cart__buttons-btn">Update Cart</button>
        <button className="cart__buttons-btn btn-coral">
          Continue Shopping
        </button>
      </div>
      <div className="container cart__totals">
        <div className="cart__totals-title">
          <p>CART TOTALS</p>
        </div>
        <div className="cart__totals-checkout">
          <span>Total</span>
          <span>$32.00</span>
        </div>
        <div className="cart__totals-btn">
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
