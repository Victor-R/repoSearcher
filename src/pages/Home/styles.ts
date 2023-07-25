import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 0.1fr 1fr;
  gap: 16px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(49, 8, 131, 1) 44%,
    rgba(153, 90, 195, 1) 100%
  );

  padding-top: 50px;

  overflow: hidden;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 10px;
`;

export const Content = styled.div`
  padding: 20px 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 90vh;

  overflow-y: auto;
`;
