import React, { useEffect } from "react";
import "./Cart.css";
import { FiTrash2 } from "react-icons/fi";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { ProductsData } from "../../static";

function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cart">
      <table className="container cart__table">
        <thead className="cart__table-thead">
          <th className="cart__table-thead-name">Mahhsulot nomi</th>
          <th>Narxi</th>
          <th>Soni</th>
          <th>Jami</th>
          <th></th>
        </thead>
        <tbody className="cart__table-tbody">
          {ProductsData?.map(item => (
            <tr>
              <td key={item.id} className="cart__table-name">
                <div>
                  <img src={item.url[0]} width={100} alt="Product" />

                  <span>{item.name}</span>
                </div>
              </td>
              <td className="cart__table-price">
                <span>Price:</span>
                <span>${item.price}.00</span>
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
              <td className="cart__table-remove">
                <div className="cart__table-remove-wrapper">
                  <span>.</span>
                  <FiTrash2 />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <div className="cart__buttons container">
        <button className="cart__buttons-btn">Update Cart</button>
        <button className="cart__buttons-btn btn-coral">
          Continue Shopping
        </button>
      </div> */}
      <div className="container cart__totals">
        <div className="cart__totals-wrapper">
          <div className="cart__totals-title">
            <p>Jamu summa</p>
          </div>
          <div className="cart__totals-checkout">
            <span>Jami</span>
            <span>$32.00</span>
          </div>
          {/* <div className="cart__totals-btn">
          <button>Proceed to checkout</button>
        </div> */}
          <form className="cart__toals-form">
            <input type="text" placeholder="To'liq ism" />
            <input type="number" placeholder="Telefon raqam" pattern="\d*" />
            <input type="text" placeholder="Manzil" />
            <textarea placeholder="Komment"></textarea>
            <button type="submit">Jo'natish</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cart;
