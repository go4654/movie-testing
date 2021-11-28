import { Link } from "react-router-dom";
import styled from "styled-components";
import { router } from "../router";
import { titleStyle } from "../style/GlobalStyle";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 150px;
  h3 {
    font-size: 40px;
    font-weight: ${titleStyle.fontWeight};
    margin-bottom: 20px;
  }
  h4 {
    font-size: 24px;
    font-weight: ${titleStyle.fontWeight};
    margin-bottom: 20px;
  }
  p {
    margin-top: 20px;
    text-decoration: underline;
    a {
      color: crimson;
      &:hover {
        color: royalblue;
      }
    }
  }
`;

export const PageNotFound = () => {
  return (
    <Wrap>
      <h3>4😢4 ERROR</h3>
      <h4>페이지를 찾을수 없습니다..!</h4>
      <p>
        <Link to={router.home}>홈으로 돌아가기</Link>
      </p>
    </Wrap>
  );
};
