import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { resetGame } from "../store/gameSlice";
import { GameScreen } from "../components/GameScreen";

export const Results: FC = () => {
   const playersNumbers = useAppSelector((state) => state.game.playersNumbers);

   const dispatch = useAppDispatch();

   const sum = playersNumbers.reduce((acc: number, number: number) => acc + number, 0);

   const average = Math.round(sum / playersNumbers.length);

   const getClosestNumber = (numbers: number[], average: number) => {
      let closestNumber = numbers[0];
      let closestDifference = Math.abs(closestNumber - average);

      numbers.map((number) => {
         if (Math.abs(number - average) < closestDifference) {
            closestDifference = Math.abs(number - average);
            closestNumber = number;
         };
      });

      return closestNumber;
   }

   const getWinners = (numbers: number[]) => {
      const closestNumber = getClosestNumber(playersNumbers, average);
      const winners: number[] = [];

      numbers.map((number, index) => {
         if (number === closestNumber) {
            winners.push(index);
         }
      });

      return winners;
   };

   const winners = getWinners(playersNumbers);

   const handlePlayAgainClick = () => {
      dispatch(resetGame());
   };

   return (
      <GameScreen isResults={true} average={average} winners={winners} handlePlayAgainClick={handlePlayAgainClick} />
   );
};