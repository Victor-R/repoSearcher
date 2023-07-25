import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  background: white;
  padding: 25px 35px;
  transition: all 0.3s ease;

  text-decoration: none;

  border-radius: 10px;

  background: #2b2a33;
  color: white;

  display: inline-flex;
  align-items: center;

  svg {
    width: 50px;
    height: 50px;
    fill: #612ea0;
  }

  & > div {
    margin-left: 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &:hover {
    filter: brightness(1.5);
    cursor: pointer;
  }
`;

export const Title = styled.h3`
  font-size: 2em;
`;
export const Description = styled.p`
  font-size: 0.765em;
`;
