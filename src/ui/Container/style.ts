import styled from "styled-components";

export const Container = styled.div(
  ({ theme: { media, size } }) => `
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 375px;
    padding: 16px;
    margin: 0 auto;

    ${media(size.mobileS)} {
      max-width: ${size.mobileS}px
    }

    ${media(size.mobileM)} {
      max-width: ${size.mobileM}px
    }
  `
);