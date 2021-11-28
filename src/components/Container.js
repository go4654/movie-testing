import styled from "styled-components";
import { moSize } from "../style/GlobalStyle";

const SContainer = styled.section`
  padding: 0 80px;
  @media screen and (max-width: 500px) {
    padding: ${moSize.padding};
  }
`;

export const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};
