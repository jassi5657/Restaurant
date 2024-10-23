import styled from 'styled-components';

export const MomosContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
`;

export const MomosWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const MomoCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;



export const MomosHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: -3rem;
`;



