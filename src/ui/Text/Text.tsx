import { PropsWithChildren, FC } from "react";
import * as S from "./style";

export const Text: FC<PropsWithChildren> = (props) => {
   const { children } = props;

   return (
      <S.Text>{children}</S.Text>
   );
};