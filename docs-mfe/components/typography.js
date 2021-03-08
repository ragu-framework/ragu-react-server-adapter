import styled from "styled-components";

export const Title = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 72px;
  
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
