import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #0d0909;
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
margin-top:-180px
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin-left:980px;
  

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  display: flex;
  align-items: center;
  margin-top: 32px;
  margin-left:-1010px;
  
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;


export const SocialCopyRight = styled.div`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
 
  margin-left: -750px;
  
`;

export const SocialSetion = styled.div`

`;

export const SocialVl = styled.div`
border-bottom: 2px solid white;
height:380px;
margin-bottom:10px
`;




export const SocialFooter = styled.div`
margin-top:-550px;
margin-left:1000px
`;

export const SocialHeadingh1 = styled.div`
color:white;
margin-left:-1100px;
margin-top:150px;

font-weight:bolder;
font-size:25px;
`;

export const Socialp = styled.div`
color:white;
margin-left:-1100px;
`;


export const Socialimg = styled.div`
margin-left:-1100px;

`;

export const SocialNavh2 = styled.div`
color:white;
font-weight: lighter;
margin-left:300px;

`;

export const SocialNav = styled.div`
color:white;
margin-top:20px;
margin-left:330px;
gap: 2rem;


ul{
  list-style-type: none;  
  
}
`;

export const SocialMediaLogo = styled.div`
width:10px;
`;



