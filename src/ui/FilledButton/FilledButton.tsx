import { PropsWithChildren, FC } from "react";
import * as S from "./style";

export type ButtonProps = {
   isActive: boolean;
   onClick: () => void;
};

export const FilledButton: FC<PropsWithChildren<ButtonProps>> = (props) => {
   const { children, isActive, onClick } = props;

   return (
      <S.FilledButton $isActive={isActive} onClick={onClick}>{children}</S.FilledButton>
   );
};