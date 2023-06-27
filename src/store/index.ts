import { configureStore } from "@reduxjs/toolkit";
import gameSliceReducer from "./gameSlice";

function configureMainStore() {
   const store = configureStore({
      reducer: {
         game: gameSliceReducer
      },
   });
   return store;
};

export const store = configureMainStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
