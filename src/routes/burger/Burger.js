import React, {
    useState,
    useEffect,
} from "react";
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

import "../App.css"
import "../../style/main.css"
import banner from "../../images/burger/banner.jpg"
import Footer from "../../components/Footer"
import Name from '../name-logo'
import { NavLink } from "react-router-dom";
import { productDataThree, productDataTwo } from '../../components/Products/data'
import { GiShoppingBag } from "react-icons/gi";
import ShoppingCart from "../../components/ShoppingCart";
import GoToTop from "../../goToTop";
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

    const onProductRemove = (productDataThree) => {
        setProducts((oldState) => {
            const productsIndex =
                oldState.findIndex(
                    (item) =>
                        item.id === productDataThree.id
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



            <div className="burger-slider">
            </div>

  

            <NavLink to="/" className="name-logo-sidebar">
                <Name />
            </NavLink>




            <div className="container-burger">
                <div class="center-div-burger">
                    <div class="clip-burger img1-burger"></div>
                    <div class="clip-burger img2-burger"></div>
                    <div class="clip-burger img3-burger"></div>
                </div>
            </div>

            <>
                <br />
                <br />
                <br />
                <br />
                


                <>
                    <BurgersContainer>
                        <BurgersHeading>{heading}</BurgersHeading>
                        <BurgersWrap>
                            {data.map((productDataThree, index) => {
                                return (
                                        <div>
                                    <BurgerCard key={index}>
                                        <div class="burger-container">
                                            <div
                                                className="box"
                                                key={productDataThree.id}>
                                                <img
                                                    className="imgBx"
                                                    src={
                                                        productDataThree.img
                                                    }
                                                    alt={
                                                        productDataThree.img
                                                    }
                                                />
                                                <h4 className="product-name">
                                                    {productDataThree.name}
                                                </h4>

                                                <span className="product-price">
                                                </span>
                                                <div className="content">
                                                    <div>
                                                        <h2>
                                                            {
                                                                productDataThree.name
                                                            }
                                                        </h2>
                                                        <br />
                                                        <h1>{

                                                            productDataThree.price
                                                        }

                                                        </h1>
                                                        <p>
                                                            {
                                                                productDataThree.desc
                                                            }
                                                        </p>
                                                    </div>
                                                    <button
                                                        className="btn"
                                                        onClick={() =>
                                                            addProductToCart(
                                                                productDataThree
                                                            )
                                                        }>
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </BurgerCard>
                                    </div>
                                )

                            })}
                        </BurgersWrap>
                    </BurgersContainer>

                </>

                <div className="banner">

                    <h1 class="banner-logo">Offer</h1>
                    <img src={banner} class="banner1" height="275px" width="275px" />


                </div>
                <div className='footer-pizza'>
                <GoToTop />
                    <Footer />
                </div>
            </>
        </>

    )
}

export default Burger
