import React, { useEffect, useMemo } from "react";
import "./Cart.css";
import { FiTrash2 } from "react-icons/fi";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementCart, removeFromCart, deleteAllCart } from "../../context/cartSlice";
import Empty from "../../components/empty/Empty";
import {toast} from "react-toastify"
import photo from "../../assets/empty-cart.webp"

function Cart() {
	const cart = useSelector(s => s.cart.value);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const dispatch = useDispatch();

	const totalPrice = useMemo(()=> {
		return cart?.reduce((a,b)=> a+(b.price * b.quantity), 0)
	}, [cart])

	const handleSubmit = e => {
		e.preventDefault();

		let token = "6600729530:AAEO3DhQAGMdi6F1dMxxpTeTblGJ9HYR2Ok";
		let chat_id = -1001810727254;

		let inp1 = encodeURIComponent(document.getElementById("inp1").value);
		let inp2 = encodeURIComponent(document.getElementById("inp2").value);
		let inp3 = encodeURIComponent(document.getElementById("inp3").value);
		let inp4 = encodeURIComponent(document.getElementById("inp4").value);

		// Очистка полей ввода
		document.getElementById("inp1").value = "";
		document.getElementById("inp2").value = "";
		document.getElementById("inp3").value = "";
		document.getElementById("inp4").value = "";

		
		cart?.forEach(item => {
			let my_text = `Mijoz: <b>${inp1}</b> %0A`;
			my_text += `Raqami: <b>${inp2}</b> %0A`
			my_text += `Manzil: <b>${inp3}</b> %0A`
			my_text += `Izoh: ${inp4} %0A%0A`
			my_text += `Nomi : ${item.name} %0A`;
			my_text += `Nomi : ${item.quantity} %0A`;
			my_text += `Narxi : ${item.price} so'm %0A%0A`;
			my_text += `${item.url[0]}%0A`;
			let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`;
			let api = new XMLHttpRequest();
			api.open("GET", url, true);
			api.send();
		});

		// my_text += `Jami: ${cart?.reduce(
		// 	(a, b) => a + b.price * b.quantity,
		// 	0
		// )} som %0A`;
		dispatch(deleteAllCart())
		toast.success("Buyurtmangiz qabul qilindi. Tez orada sizga bog'lanamiz")
	};

	return (
		<div  className="cart">
			{
				cart.length ?
				<>
				<h2 className="container category__title text__left">Savatchangiz</h2>
        		<br />
				<table className="container cart__table">
					<thead className="cart__table-thead">
					<tr>
					<th className="cart__table-thead-name">Mahhsulot nomi</th>
						<th>Narxi</th>
						<th>Soni</th>
						<th>Jami</th>
						<th></th>
					</tr>
					</thead>
					<tbody className="cart__table-tbody">
						{cart?.map(item => (
							<tr key={item._id}>
								<td key={item.id} className="cart__table-name">
									<div>
										<img src={item.url[0]} width={100} alt="Product" />
	
										<span>{item.name}</span>
									</div>
								</td>
								<td className="cart__table-price">
									<span>Narxi:</span>
									<span>{item.price?.brm()} so'm</span>
								</td>
								<td className="cart__table-quantity">
									<span>Miqdori</span>
									<div className="cart__table-quantity-wrapper">
										<div className="cart__table-quantity-actions">
											<p>{item.quantity}</p>
											<div className="cart__table-quantity-btns">
												<button  onClick={() =>dispatch( addToCart(item))}>
													<GoTriangleUp />
												</button>
												<button disabled={item.quantity <= 1} onClick={() => dispatch(decrementCart(item))}>
													<GoTriangleDown />
												</button>
											</div>
										</div>
									</div>
								</td>
								<td className="cart__table-total">
									<span>Jami:</span>
									<span>{(item.price*item.quantity)?.brm()} so'm</span>
								</td>
								<td className="cart__table-remove">
									<div className="cart__table-remove-wrapper">
										<span>.</span>
										<button onClick={() => dispatch(removeFromCart(item._id))}>
											<FiTrash2 />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
		
				<div className="cart__totals-wrapper">
						<div className="cart__totals-title">
							<p>Rasmiylashtirish</p>
						</div>
						<div className="cart__totals-checkout">
							<span>Jami</span>
							<span>{totalPrice?.brm()} so'm</span>
						</div>
				
						<form className="cart__toals-form" onSubmit={handleSubmit}>
							<input autoComplete="off" id="inp1" type="text" placeholder="To'liq ism" />
							<input
								id="inp2"
								type="number"
								placeholder="Telefon raqam"
								pattern="\d*"
								autoComplete="off"
							/>
							<input autoComplete="off" id="inp3" type="text" placeholder="Manzil" />
							<textarea id="inp4" placeholder="Komment"></textarea>
							<button type="submit">Jo'natish</button>
						</form>
				</div>
			</>:
			 <Empty title="Savatcha" url={photo}/>
			}
		</div>
	
	);
}

export default Cart;
