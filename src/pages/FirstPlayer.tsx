import { FC } from "react";
import { useAppDispatch } from "../store/hooks";
import { getFirstPlayerNumber } from "../store/gameSlice";
import { GameScreen } from "../components/GameScreen";

export const FirstPlayer: FC = () => {
   const dispatch = useAppDispatch();

   const handleFilledButtonClick = (number: number) => {
      dispatch(getFirstPlayerNumber(number));
   };

   return (
      <GameScreen playerIndex={0} isResults={false} handleFilledButtonClick={handleFilledButtonClick} />
   );
};