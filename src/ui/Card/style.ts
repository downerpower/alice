import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
`;

export const Cover = styled.img<{ $isCovered: boolean }>(
  ({ theme: { media, size, color }, $isCovered }) => `
    position: absolute;
    width: 76px;
    height: 100px;

    z-index: ${$isCovered ? -10 : 10};
    border:  3px solid ${color.red};
    border-radius: 6px; 

  ${media(size.mobileM)} {
    width: 86px;
    height: 110px;
  }

  ${media(size.mobileS)} {
    width: 76px;
    height: 100px;
  }
  `
);

export const Card = styled.div<{ $isActive: boolean }>(
  ({ theme: { media, size, color }, $isActive }) => `
    display: flex;
    justify-content: center;
    align-items: center;

    width: 76px;
    height: 100px;

    font-size: 36px;
    color: ${color.black};
    line-height: 44px;
    background-color: ${color.white};
    border:  3px solid ${$isActive ? color.green : color.red};
    border-radius: 6px; 

  ${media(size.mobileM)} {
    width: 86px;
    height: 110px;
  }

  ${media(size.mobileS)} {
    width: 76px;
    height: 100px;
  }
  `
);