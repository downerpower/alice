import { Container } from "../ui/Container/style";
import { Text } from "../ui/Text/style";
import { useAppSelector } from "../store/hooks";
import { Card } from "../ui/Card/Card";
import { FilledButton } from "../ui/FilledButton/FilledButton";
import { DashedButton } from "../ui/DashedButton/DashedButton";
import * as S from "./style";
import { FC } from "react";
import { NUMBERS } from "../shared/constants";

type GameScreenProps = {
   playerIndex?: number;
   isResults: boolean;
   average?: number
   winners?: number[];
   handleFilledButtonClick?: (number: number) => void;
   handlePlayAgainClick?: () => void;
};

export const GameScreen: FC<GameScreenProps> = (props) => {
   const { playerIndex, isResults, average, winners, handleFilledButtonClick, handlePlayAgainClick } = props;

   const playersNumbers = useAppSelector((state) => state.game.playersNumbers);
   const playerNumber = playerIndex !== undefined ? playersNumbers[playerIndex] : -1;

   const handleButtonClick = (number: number) => {
      if (handleFilledButtonClick) {
         handleFilledButtonClick(number);
      };
   };

   const getHeaderText = () => {
      const isResultTie = isResults && winners?.length === 3;
      const isMultipleWinners = winners?.length && winners.length > 1;
      const currentPlayerLabel = playerIndex !== undefined && `Игрок${playerIndex + 1}`;
      const nextPlayerLabel = playerIndex !== undefined && playerIndex < 2 && `Игрок${playerIndex + 2}`;

      if (isResultTie) {
         return <Text> Ничья! <br /> можете сыграть снова! </Text>
      };

      if (isResults) {
         return (
            <Text>
               {isMultipleWinners ?
                  `Выиграли Игрок${winners[0] + 1} и Игрок${winners[1] + 1}` :
                  `Выиграл Игрок${winners![0] + 1}`} <br /> можете сыграть снова!
            </Text>
         );
      };

      if (playerNumber > -1) {
         return (
            <Text>
               {`${currentPlayerLabel}, нажмите завершить`} <br />
               {nextPlayerLabel && `и передайте ход ${nextPlayerLabel}.`}
            </Text>
         );
      };

      return (
         <Text>
            {`${currentPlayerLabel}, выберите число!`} <br />
            Выигрывает игрок, <br /> у которого число ближе всего к среднему значению.
         </Text>
      );
   };

   const getCardFace = (cardNumber: number, index: number) => {
      if (isResults) {
         return cardNumber;
      };

      return playerIndex === index ? cardNumber : "?";
   };

   const getPath = () => {
      if (playerIndex === 2) {
         return "/results";
      };
      return playerIndex === undefined ? "/player1" : `/player${playerIndex + 2}`;
   };

   return (
      <Container>
         <S.LogoContainer>
            <img src="./img/logo.png" alt="logo" />
         </S.LogoContainer>
         {getHeaderText()}
         <S.CardDisplay>
            {playersNumbers.map((number, i) => (
               <S.CardContainer key={i}>
                  <Card isActive={winners?.includes(i) || false} isCovered={number > -1}>
                     {number > -1 && getCardFace(number, i)}
                  </Card>
                  <S.Title>Игрок {i + 1}</S.Title>
               </S.CardContainer>
            ))}
         </S.CardDisplay>
         {
            isResults ?
               <S.ResultContainer>
                  <S.ResultSubtitle>Среднее значение</S.ResultSubtitle>
                  <S.ResultText>{average}</S.ResultText>
               </S.ResultContainer> :
               <S.NumberDisplayContainer>
                  {NUMBERS.map((number, i) => (
                     <FilledButton
                        key={i}
                        isActive={playerNumber === number}
                        onClick={() => handleButtonClick(number)}
                     >
                        {number}
                     </FilledButton>
                  ))}
               </S.NumberDisplayContainer>
         }
         <DashedButton
            isActive={playerNumber > -1 || isResults}
            path={getPath()}
            onClick={handlePlayAgainClick}
         >
            {isResults ? "Играть снова" : "Завершить"}
         </DashedButton>
      </Container>
   );
};