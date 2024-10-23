import React from 'react'
import { GlobalStyle } from "../globalStyle";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { productData, productDataTwo, productDataThree } from "../components/Products/data";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Burger from '../components/Burger';
import Cart from "../cart"
import GoToTop from '../goToTop';


function Index() {
  return (


   <>
    
    <Cart/>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose You Favorite" data={productData}/>
      <Feature/>
      <Products heading="Sweet Treats For You" data={productDataTwo}/>
      <Burger heading="Choose You Favorite" data={productDataThree}/>
    <GoToTop />
      <Footer />
      
      
      </>
    

  );
}

export default Index
