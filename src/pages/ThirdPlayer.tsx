import { FC } from "react";
import { useAppDispatch } from "../store/hooks";
import { getThirdPlayerNumber } from "../store/gameSlice";
import { GameScreen } from "../components/GameScreen";

export const ThirdPlayer: FC = () => {
   const dispatch = useAppDispatch();

   const handleFilledButtonClick = (number: number) => {
      dispatch(getThirdPlayerNumber(number));
   };

   return (
      <GameScreen playerIndex={2} isResults={false} handleFilledButtonClick={handleFilledButtonClick} />
   );
};