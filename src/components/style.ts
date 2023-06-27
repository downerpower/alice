import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25.5px;
`;

export const CardDisplay = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  margin: 0 auto;
  margin-bottom: 110px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.p(
  ({ theme: { media, size, color } }) => `
    color: ${color.white};
    text-align: center;
    margin: 0;

  ${media(size.mobileM)} {
    font-size: 12px;
  }

  ${media(size.mobileS)} {
    font-size: 10px;
  }
  `
);

export const NumberDisplayContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 16px;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const ResultSubtitle = styled.h3`
  color: ${({ theme }) => theme.color.white};
  font-weight: 400;
  line-height: 22px;
  font-size: 16px;
  margin: 0;
`;

export const ResultText = styled.p`
  margin: 0;
  font-size: 86px;
  font-family: 'Times New Roman';
  font-weight: 700;
  color: ${({ theme }) => theme.color.white};
`;