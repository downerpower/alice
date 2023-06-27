import { FC } from "react";
import { useAppDispatch } from "../store/hooks";
import { getSecondPlayerNumber } from "../store/gameSlice";
import { GameScreen } from "../components/GameScreen";

export const SecondPlayer: FC = () => {
   const dispatch = useAppDispatch();

   const handleFilledButtonClick = (number: number) => {
      dispatch(getSecondPlayerNumber(number));
   };

   return (
      <GameScreen playerIndex={1} isResults={false} handleFilledButtonClick={handleFilledButtonClick} />
   );
};