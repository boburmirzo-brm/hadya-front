import React, { useEffect } from "react";
import "./Cart.css";
import { FiTrash2 } from "react-icons/fi";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { ProductsData } from "../../static";
import { useSelector } from "react-redux";

const initialState = {
	name: "",
	phone: "",
	address: "",
	comment: ""
};

function Cart() {
	const cart = useSelector(s => s.cart.value);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	console.log(cart);

	// const handleSubmit = e => {
	// 	e.preventDefault();

	// 	let token = "6600729530:AAEO3DhQAGMdi6F1dMxxpTeTblGJ9HYR2Ok";

	// 	let chat_id = -933130947;

	// 	let my_text = `Mahsulot oluvhi:%0A - Mahsulot oluvhining ismi: ${inp1} %0A - Mahsulot oluvhining raqami: ${inp2}  %0A - Mahsulot oluvhining manzili: ${inp3} %0A%0A`;

	// 	data?.forEach(item => {
	// 		my_text += `Nomi : ${item.title} %0A`;
	// 		my_text += `Soni : ${item.quantity} %0A`;
	// 		my_text += `Narxi : ${item.price} so'm %0A%0A`;
	// 	});

	// 	my_text += `Jami: ${data?.reduce(
	// 		(a, b) => a + b.price * b.quantity,
	// 		0
	// 	)} som %0A`;

	// 	let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;
	// 	let api = new XMLHttpRequest();
	// 	api.open("GET", url, true);
	// 	api.send();
	// 	console.log("Message sent");
	// };

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
						<textarea placeholder="Komment" readOnly></textarea>
						<button type="submit">Jo'natish</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Cart;
