import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export let darkValue = true;

export const MainColor = {
  bgColor: darkValue ? "#1d1d1d" : "#fff",
  fontColor: darkValue ? "#fff" : "#1d1d1d",
};

export const moSize = {
  padding: "0 20px",
  title: "24px",
};

export const moStyle = {
  mainFontSize: "40px",
  subfontSize: "25px",
};

export const titleStyle = {
  fontWeight: 600,
  subfontSize: "35px",
  mainFontSize: "70px",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}

    *{ box-sizing:border-box}

    a{
        text-decoration: none;
        color: ${MainColor.fontColor};
    }

    body{
        font-family: 'Noto Sans KR', sans-serif;
        background-color: ${MainColor.bgColor};
        color: ${MainColor.fontColor};
        letter-spacing: -1px;
        word-break: keep-all;
    }
`;
