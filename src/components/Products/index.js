import React, { useEffect, useState } from 'react'
import {
    ProductsContainer,
    ProductsWrapper,
    ProductsHeading,
    ProductTitle,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductDesc,
    ProductPrice,
    ProductButton
} from './ProductsElements';
import "../../style/main.css"

import { GiShoppingBag } from "react-icons/gi";
import ShoppingCart from "../../components/ShoppingCart";
import productData from './data';


const Products = ({ heading, data }) => {

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
            <ProductsContainer>
                <ProductsHeading>{heading}</ProductsHeading>
                <ProductsWrapper>
                    {data.map((productData, index) => {
                        return (
                            <ProductCard key={index}>
                                <ProductImg src={productData.img} alt={productData.alt} />
                                <ProductInfo>
                                    <ProductTitle>{productData.name}</ProductTitle>
                                    <ProductDesc>{productData.desc}</ProductDesc>
                                    <ProductPrice>{productData.price}</ProductPrice>
                                    <ProductButton>{

                                        <button
                                            className="ProductButton"
                                            onClick={() =>
                                                addProductToCart(
                                                    productData
                                                )
                                            }>
                                            Add to cart
                                        </button>
                                    }</ProductButton>
                                </ProductInfo>
                            </ProductCard>
                        )

                    })}
                </ProductsWrapper>
            </ProductsContainer>
        </>
        </>
    )
}



export default Products
