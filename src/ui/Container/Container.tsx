import { FC, PropsWithChildren } from "react";
import * as S from "./style";

export const Container: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return <S.Container>{children}</S.Container>;
};