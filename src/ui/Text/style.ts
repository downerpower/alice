import styled from "styled-components";

export const Text = styled.p(
  ({ theme: { media, size, color } }) => `
    height: 88px;

    color: ${color.white};
    text-align: center;
    line-height: 22px;

    margin: 0;
    margin-bottom: 66px; 

  ${media(size.mobileM)} {
    font-size: 18px;
    max-width: 400px;
  }

    ${media(size.mobileS)} {
    font-size: 16px;
  }
  `
);