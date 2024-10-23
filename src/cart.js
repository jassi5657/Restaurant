import React, {
	useState,
	useEffect,
} from "react";
import "./style/main.css";
import { GiShoppingBag } from "react-icons/gi";

import ShoppingCart from "./components/ShoppingCart";

import productData from "./components/Products/data";

function Cart() {
	const [cartsVisibilty, setCartVisible] =
		useState(false);
	const [productDataInCart, setProducts] =
		useState(
			JSON.parse(
				localStorage.getItem(
					"shopping-cart"
				)
			) || []
		);
	useEffect(() => {
		localStorage.setItem(
			"shopping-cart",
			JSON.stringify(productDataInCart)
		);
	}, [productDataInCart]);
	const addProductToCart = (productData) => {
		const newProduct = {
			...productData,
			count: 1,
		};
		setProducts([
			...productDataInCart,
			newProduct,
		]);
	};

	const onQuantityChange = (
		productId,
		count
	) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productId
				);
			if (productsIndex !== -1) {
				oldState[productsIndex].count =
					count;
			}
			return [...oldState];
		});
	};

	const onProductRemove = (productData) => {
		setProducts((oldState) => {
			const productsIndex =
				oldState.findIndex(
					(item) =>
						item.id === productData.id
				);
			if (productsIndex !== -1) {
				oldState.splice(productsIndex, 1);
			}
			return [...oldState];
		});
	};

	return (
		<div className="App">
			<ShoppingCart
				visibilty={cartsVisibilty}
				productData={productDataInCart}
				onClose={() =>
					setCartVisible(false)
				}
				onQuantityChange={
					onQuantityChange
				}
				onProductRemove={onProductRemove}
			/>
			<div className="navbar1">
			
				<button
					className="btn1 shopping-cart-btn1"
					onClick={() =>
						setCartVisible(true)
					}>
					<GiShoppingBag size={24} />
					{productDataInCart.length >
						0 && (
						<span className="product-count">
							{
								productDataInCart.length
							}
						</span>
					)}
				</button>
			</div>
			
		</div>
		
	);
}

export default Cart;
