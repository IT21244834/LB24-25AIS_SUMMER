import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <center></center>
    </Container>
  );
};

export default Home;

export const Container = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000000;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
