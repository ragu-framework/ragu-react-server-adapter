import styled from "styled-components";

const WrapperStyle = styled.section`
  background: #2B3332;
  padding: 110px 0;
  font-family: Poppins, sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: white;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const devFonts = <link
  href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300&family=Poppins:wght@300;500&display=swap&family=Source+Code+Pro:wght@1;300"
  rel="stylesheet"/>;

export const Wrapper = ({env, children}) => {
  if (env === 'dev') {
    return <WrapperStyle>
      {devFonts}
      {children}
    </WrapperStyle>
  }

  return <WrapperStyle>{children}</WrapperStyle>;
}

export const MainContent = styled.div`
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 1400px) {
    max-width: 95%;
  }
`;
