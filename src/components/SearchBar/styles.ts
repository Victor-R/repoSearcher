import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #2b2a33;

  border-radius: 15px;

  height: 55px;

  background: #2b2a33;
  padding: 10px 20px;

  svg {
    width: 26px;
    height: 26px;
    fill: white;
  }

  &:focus-within {
    border: 3px solid #763ead;

    svg {
      fill: #763ead;
    }
  }
`;

export const Input = styled.input`
  flex: 1;
  background: none;
  border: none;
  font-size: 2em;

  color: white;

  outline: none;
`;
