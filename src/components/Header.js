import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { router } from "../router";
import { moSize } from "../style/GlobalStyle";

const SHeader = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  transition: 0.5s;
  @media screen and (max-width: 500px) {
    padding: ${moSize.padding};
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: 600;
  a {
    color: gold;
  }
`;

const MenuWrap = styled.div`
  display: flex;
`;

const Menu = styled.div`
  font-weight: 600;
  &:nth-child(1) {
    margin-right: 50px;
  }
  @media screen and (max-width: 500px) {
    &:nth-child(1) {
      margin-right: 30px;
    }
  }
`;

export const Header = () => {
  const [bg, setBg] = useState("");

  const HandleScroll = () => {
    const sct = window.pageYOffset;
    if (sct >= 200) {
      setBg("rgba(0,0,0,0.5)");
    } else {
      setBg("transparent");
    }
  };

  window.addEventListener("scroll", HandleScroll);

  return (
    <SHeader bgColor={bg}>
      <Logo>
        <Link to={router.home}>PnMovie</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to={router.home}>홈</Link>
        </Menu>

        <Menu>
          <Link to={router.search}>영화검색</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
