import { FaSpinner } from "react-icons/fa6";
import { keyframes, styled } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
    fill: white;
  }
  to {
    transform: rotate(360deg);
    fill: #763ead;
  }
`;

export const Loading = styled(FaSpinner)`
  animation: ${rotate} 1s alternate infinite;

  width: 26px;
  height: 26px;
  fill: white;
`;
