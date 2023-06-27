import { PropsWithChildren, FC } from "react";
import * as S from "./style";

export type ButtonProps = {
   isActive: boolean;
   path: string;
   onClick?: () => void;
};

export const DashedButton: FC<PropsWithChildren<ButtonProps>> = (props) => {
   const { children, isActive, path, onClick } = props;

   return (
      <S.DashedButtonContainer $isActive={isActive}>
         {
            isActive ? <S.DashedButton onClick={onClick} to={path}>{children}</S.DashedButton> :
               <>{children}</>
         }
      </S.DashedButtonContainer>
   );
};