import styled from "styled-components";
import { Link } from "react-router-dom";

export const DashedButtonContainer = styled.div<{ $isActive: boolean }>(
  ({ theme: { media, size, color}, $isActive  }) => `
  width: 343px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 16px;
  color: ${color.white};

  background-color: ${$isActive ? color.red : 'transparent'}; 
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='white' stroke-width='10' stroke-dasharray='6%2c 6' stroke-dashoffset='7' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 30px;

${media(size.mobileM)} {
  width: 360px;
}

${media(size.mobileS)} {
  width: 343px;
  height: 52px;
}
`
);

export const DashedButton = styled(Link)`
  width: 100%;
  text-decoration: none;
  text-align: center;
  line-height: 20px;
  color: inherit;
  padding: 12px 24px;
`;