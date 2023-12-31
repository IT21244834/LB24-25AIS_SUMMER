import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const FrontofficeContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;
export const FrontofficeWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const FrontofficeAlignmentWrapper = styled.div`
  width: 650px;
  display: grid;
  align-items: center;
  margin-left: 120px;
  grid-gap: 16px;
  padding: 0 50px;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    margin-left: 10px;
    width: 300px;
  }

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
    margin-left: 10px;
    width: 300px;
  }
`;
export const FrontofficeCard = styled.div`
  background: #010606;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  border: solid;
  border-color: ${(props) => props.backgroundColor};

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const FrontofficeIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const FrontofficeH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const FrontofficeH2 = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  text-decoration: none;
  color: #fff;
`;

export const FrontofficeLink = styled(LinkR)`
  font-size: 2rem;
  text-decoration: none;
  color: #fff;
`;

export const FrontofficeP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
