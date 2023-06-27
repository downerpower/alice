import styled from "styled-components";
import ALSHaussTTF from "../../fonts/ALSHauss-Medium.ttf";

export const FilledButton = styled.button<{ $isActive: boolean }>(
  ({ theme: { media, size, color }, $isActive}) => `
    @font-face {
      font-family: 'ALSHauss';
      src: url(${ALSHaussTTF}) format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: auto;
    }

    width: 74px;
    font-weight: 500;
    font-family: "ALSHauss";
    color: ${$isActive ? color.white : color.black};
    background-color: ${$isActive ? color.red : color.white};
    border: 0;
    border-radius: 64px;

    padding: 14px 0px;
    cursor: pointer; 

  ${media(size.mobileM)} {
    width: 78px;
    font-size: 20px;
  }

  ${media(size.mobileS)} {
    width: 74px;
    font-size: 18px;
  }
  `
);
