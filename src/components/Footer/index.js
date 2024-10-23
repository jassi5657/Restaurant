import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube
} from 'react-icons/fa'

import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialCopyRight,
    SocialVl,
    SocialFooter,
    Socialp,
    SocialHeadingh1,
    SocialNav,
    Socialimg,
    SocialNavh2,
    SocialMediaLogo,
    


    SocialIconLink
} from './FooterElements';
import "../../App.css"


import playStore from "../../images/play-store.png"
import appStore from "../../images/app-store.png"
import DR from "../../images/DR.jpg"
import socialLogo from "../../images/social-logo.jpg"
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <FooterContainer>
            <SocialVl></SocialVl>
            <FooterWrap>
<br />
<br />
<br />

                <SocialFooter>
                    <SocialHeadingh1>Download Our App</SocialHeadingh1> 
                    <br />
                    <br />
                    <Socialp>Downlaod App For Andriod And ios mobile phone</Socialp>
                    <br />
                    <br />

                    <Socialimg className='social-img'>
                        <img src={playStore} alt="" className='social-img' />
                        <img src={appStore} alt="" className='social-img'/>

                    </Socialimg>
                    <br />
                        <img src={DR} alt="" className='footer-logo'/>
                </SocialFooter>
                
                <SocialNavh2 className='navH2'>
                    <h2>Pizza</h2>
                </SocialNavh2>
                <SocialNav> 
                
                    <ul>
                        <li>Cheese Pizza</li>
                        <br />
                        <li>Chicken Pizza</li>
                        <br />
                        <li>Veggie Pizza</li>
                        <br />
                        <li>Tomato Pizza</li>

                    </ul>
                </SocialNav>


                <div className="col1">
                <SocialNavh2 className='navH2'>
                    <h2>Burger</h2>
                </SocialNavh2>
                <SocialNav> 
                
                <ul>
                    <li>Cheese Burger</li>
                    <br />
                    <li>Aloo Tikki Burger</li>
                    <br />
                    <li>Double Aloo Tikki Burger</li>
                    <br />
                    <li>Veggie Burger</li>

                </ul>
            </SocialNav>
                </div>

                <div className="col2">
                <SocialNavh2 className='navH2'>
                    <h2>Momo's</h2>
                </SocialNavh2>
                <SocialNav> 
                
                <ul>
                    <li>Fried Momo's</li>
                    <br />
                    <li>Chilli Momo's</li>
                    <br />
                    <li>Paneer Momo's</li>
                    <br />
                    <li>Steamed Momo's</li>

                </ul>
            </SocialNav>
                </div>

               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               
             
              

                <SocialCopyRight>© 2023 Dragon Restaurant, Inc. All rights reserved.</SocialCopyRight>
                <SocialLogo to="/">Created By Jaspreet Singh(27512153810)</SocialLogo>
                <SocialMediaLogo>
                    
                    <Link to="https://www.facebook.com"> 
                    <img src={socialLogo} className="social-logo" />
                    </Link>
                </SocialMediaLogo>

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer