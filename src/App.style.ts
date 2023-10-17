import styled, { createGlobalStyle } from "styled-components";

// @ts-ignore
import BgPhoto from "./image/adele-xevTicw7xg4-unsplash.jpg";

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}
body{
    background-image: url(${BgPhoto});
    background-size: cover;
    display: flex;
    justify-content: center;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    letter-spacing: 2px;
    margin: 0;
  }
  h1 {
    background-image: linear-gradient(180deg, #fff, #ffb34a);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: text;
    font-size: 4rem;
    margin: 5px 0;
  }
  .btnstart {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.28) 0px 3px 8px;
    background: linear-gradient(180deg, #fff9b0, #ff731d);
    border: none;
    padding: 10px;
    margin:20px 0;
    font-size: 1.2rem;
    letter-spacing: 2px;
    font-weight: bold;
    color: #06283d;
    border-radius: 8px;
    animation: nima 0.5s infinite alternate;
  }

  @keyframes nima {
    0% {
      background-position:0 40%;
      transform: scale(1.2);
    }
    100% {
      background-position:50% 80%;
      transform: scale(1);
    }
  }
`;
