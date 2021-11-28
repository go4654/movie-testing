import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import { titleStyle } from "../../style/GlobalStyle";

const SMainBanner = styled.section`
  height: 90vh;
  background-size: cover;
  background-position: center;
  padding: 250px 0 0 80px;
  position: relative;
  @media screen and (max-width: 500px) {
    padding: 370px 0 0 20px;
  }
`;

const BlackBg = styled.div`
  width: 100%;
  height: 70vh;
  position: absolute;
  bottom: 0;
  left: 0;
  background: linear-gradient(0deg, black, #000000a1, transparent);
`;

const Title = styled.div`
  max-width: 700px;
  width: 100%;
  font-size: 70px;
  font-weight: 600;
  line-height: 5rem;
  margin-bottom: 20px;
  position: relative;
  z-index: 9;
  @media screen and (max-width: 500px) {
    font-size: 40px;
    line-height: 2.5rem;
  }
`;

const Desc = styled.div`
  max-width: 550px;
  width: 100%;
  line-height: 1.5rem;
  opacity: 0.8;
  font-size: 18px;
  position: relative;
  z-index: 9;
  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const Button = styled.button`
  all: unset;
  padding: 15px 50px;
  font-weight: ${titleStyle.fontWeight};
  border: 1px solid white;
  margin-top: 50px;
  cursor: pointer;
  position: relative;
  z-index: 9;
  &:hover {
    background-color: white;
    color: #1d1d1d;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const MoreBanner = styled.section`
  height: ${(props) => props.height};
  display: flex;
  justify-content: space-between;
  padding-left: 80px;
  overflow: hidden;
  transition: 0.5s;
  background-color: #111;
  margin-top: 80px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const ConWrap = styled.div`
  width: 30%;
  margin-top: 50px;
`;

const MoreTitle = styled.div`
  font-size: ${titleStyle.mainFontSize};
  font-weight: ${titleStyle.fontWeight};
  line-height: 1.2em;
`;

const MoreDesc = styled.div`
  font-size: 18px;
  font-weight: 300;
  opacity: 0.7;
  margin-top: 50px;
  line-height: 2rem;
`;

const MoreBg = styled.div`
  width: 63%;
  height: 80vh;
  background-size: cover;
  background-position: top;
  div {
    float: right;
    padding: 30px;
    font-size: 30px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const MainBanner = ({ bg, title, desc }) => {
  const [more, setMore] = useState(0);
  const [num, setNum] = useState(0);

  const onClickMore = () => {
    if (num === 0) {
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth",
      });
      setMore("80vh");
      setNum(num + 1);
    } else if (num === 1) {
      setMore("0");
      setNum(num - 1);
    }
  };

  const onClickClose = () => {
    setMore("0");
    setNum(0);
  };

  return (
    <div>
      <SMainBanner
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${bg})`,
        }}
      >
        <Title>{title}</Title>
        <Desc>{desc.slice(0, 70) + "..."}</Desc>
        <Button onClick={onClickMore}>더 보기 +</Button>
        <BlackBg></BlackBg>
      </SMainBanner>

      <MoreBanner height={more}>
        <ConWrap>
          <MoreTitle>{title}</MoreTitle>
          <MoreDesc>{desc}</MoreDesc>
        </ConWrap>
        <MoreBg
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${bg})`,
          }}
        >
          <div onClick={onClickClose}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </MoreBg>
      </MoreBanner>
    </div>
  );
};
