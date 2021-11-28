import styled, { keyframes } from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const loadingAni = keyframes`
    100%{ transform:rotate(360deg)}
`;

const SLoading = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid gold;
  border-color: gold transparent;
  border-radius: 50%;
  animation: ${loadingAni} 1s infinite;
`;

export const Loading = () => {
  return (
    <Wrap>
      <SLoading></SLoading>
    </Wrap>
  );
};
