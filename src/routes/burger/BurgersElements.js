import styled from 'styled-components';

export const BurgersContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const BurgersWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const BurgerCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const BurgerImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
  &:hover{
  transform: scale(1.1);
  }
`;

export const BurgersHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: -3rem;
`;

export const BurgerTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const BurgerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const BurgerDesc = styled.p`
  margin-bottom: 1rem;
`;

export const BurgerPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const BurgerButton = styled.button`


  
`;
