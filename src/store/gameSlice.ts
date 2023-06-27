import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
   playersNumbers: number[];
};

const initialState: InitialState = {
   playersNumbers: [-1, -1, -1]
};

export const gameSlice = createSlice({
   name: 'game',
   initialState,
   reducers: {
      getFirstPlayerNumber: (state, action) => {
         state.playersNumbers[0] = action.payload;
      },
      getSecondPlayerNumber: (state, action) => {
         state.playersNumbers[1] = action.payload;
      },
      getThirdPlayerNumber: (state, action) => {
         state.playersNumbers[2] = action.payload;
      },
      resetGame: (state) => {
         state.playersNumbers = [-1, -1, -1];
      }
   }
});

export const { getFirstPlayerNumber, getSecondPlayerNumber, getThirdPlayerNumber, resetGame } = gameSlice.actions;

export default gameSlice.reducer;

