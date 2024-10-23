import React from "react";
import "../style/shoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
function myFun(){
	alert("Your Order Placed successfully")
}
function ShoppingCart({
	visibilty,
	productData,
	onProductRemove,
	onClose,
	onQuantityChange,
}) {
	return (
		<div
			className="modal"
			style={{
				display: visibilty
					? "block"
					: "none",
			}}>
			<div className="shoppingCart">
				<div className="header">
					<h2>Shopping cart</h2>
					<button
						className="btn1 close-btn1"
						onClick={onClose}>
						<AiFillCloseCircle
							size={30}
						/>
					</button>
				</div>
				<div className="cart-products">
					{productData.length === 0 && (
						<span className="empty-text">
							Your basket is
							currently empty
						</span>
					)}
					{productData.map((productData) => (
						<div
							className="cart-product"
							key={productData.id}>
							<img
								src={
									productData.img
								}
								alt={productData.name}
							/>
							<div className="product-info">
								<h3>
									{productData.name}
								</h3>
								<span className="product-price">
									{productData.price *
										productData.count}
									$
								</span>
							</div>
							<select
								className="count"
								value={
									productData.count
								}
								onChange={(
									event
								) => {
									onQuantityChange(
										productData.id,
										event
											.target
											.value
									);
								}}>
								{[
									...Array(
										10
									).keys(),
								].map(
									(number) => {
										const num =
											number +
											1;
										return (
											<option
												value={
													num
												}
												key={
													num
												}>
												{
													num
												}
											</option>
										);
									}
								)}
							</select>
							<button
								className="btn1 remove-btn1"
								onClick={() =>
									onProductRemove(
										productData
									)
								}>
								<RiDeleteBin6Line
									size={20}
								/>
							</button>
						</div>
					))}
					{productData.length > 0 && (
						<button className="btn1 checkout-btn1" onClick={() => alert('Order Placed Successfully')}>
							Proceed to checkout
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default ShoppingCart;
