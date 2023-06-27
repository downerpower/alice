import { PropsWithChildren, FC } from "react";
import * as S from "./style";

export type CardProps = {
   isActive: boolean;
   isCovered: boolean;
};

export const Card: FC<PropsWithChildren<CardProps>> = (props) => {
   const { children, isActive, isCovered } = props;

   return (
      <S.CardContainer>
         <S.Cover src="./img/cardCover.png" alt="card cover" $isCovered={isCovered} />
         <S.Card $isActive={isActive}>{children}</S.Card>
      </S.CardContainer>
   );
};