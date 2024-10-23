import React, { useEffect, useState } from 'react'
import {
    BurgersContainer,
    BurgersWrap,
    BurgersHeading,
    BurgerTitle,
    BurgerCard,
    BurgerImg,
    BurgerInfo,
    BurgerDesc,
    BurgerPrice,
    BurgerButton
} from './BurgersElements';

import "../../style/main.css"
import "../../App.css"

import { GiShoppingBag } from "react-icons/gi";
import ShoppingCart from "../../components/ShoppingCart";
import productDataTwo from '../Products/data';
const Burger = ({ heading, data }) => {



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
    const addProductToCart = (product) => {
        const newProduct = {
            ...product,
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

        <>
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


            </div>

<>
            <BurgersContainer>
                <BurgersHeading>{heading}</BurgersHeading>
                <BurgersWrap>
                    {data.map((productDataTwo, index) => {
                        return (
                            <BurgerCard key={index}>
                                <BurgerImg src={productDataTwo.img} alt={productDataTwo.alt} />
                                <BurgerInfo>
                                    <BurgerTitle>{productDataTwo.name}</BurgerTitle>
                                    <BurgerDesc>{productDataTwo.desc}</BurgerDesc>
                                    <BurgerPrice>{productDataTwo.price}</BurgerPrice>
                                    <BurgerButton>{

                                        <button
                                            className="BurgerButton"
                                            onClick={() =>
                                                addProductToCart(
                                                    productDataTwo
                                                )
                                            }>
                                            Add to cart
                                        </button>
                                    }</BurgerButton>
                                </BurgerInfo>
                            </BurgerCard>
                        )

                    })}
                </BurgersWrap>
            </BurgersContainer>
        </>
    
        </>
    )
}



export default Burger
