import styled from "styled-components";

export const Container = styled.div<{ active?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 24px;
  justify-items: start;
  transition: all 0.3s ease;

  background: #2b2a33;
  color: white;

  width: 466px;
  border-radius: 10px;
  padding: 20px;

  &:hover {
    filter: brightness(1.2);
    cursor: pointer;
  }

  ${({ active }) => active && `background: #733cac;`}
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100px;
`;

export const Name = styled.h3`
  font-size: 2em;
`;
