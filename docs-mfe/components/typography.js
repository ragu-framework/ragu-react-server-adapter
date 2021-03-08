import styled from "styled-components";

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  
  color: #FFFFFF;
`

export const Subtitle = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  margin-top: 40px;
  color: #FFFFFF;
`

export const TitleWrapper = styled.hgroup`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 500px) {
    img {
      display: none;
    }
  }
`

export const InfoText = styled.p`
  margin: 20px 0;
  color: rgb(255, 255, 255, 0.75);
`
