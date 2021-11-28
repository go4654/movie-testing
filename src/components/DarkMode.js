import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { darkValue, MainColor } from "../style/GlobalStyle";

const SDarkMode = styled.div`
  position: fixed;
  bottom: 100px;
  right: 50px;
  padding: 15px 30px;
  border: 1px solid ${MainColor.fontColor};
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  span {
    margin-left: 15px;
  }
  cursor: pointer;
`;

export const DarkMode = () => {
  const { dark, setDark } = useState(true);

  const handleDarkMode = () => {
    darkValue ? (darkValue = true) : (darkValue = false);
  };

  return (
    <SDarkMode onClick={handleDarkMode}>
      <FontAwesomeIcon icon={faSun} />
      <span> 라이트 모드</span>
    </SDarkMode>
  );
};
