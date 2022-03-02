import { configureStore } from '@reduxjs/toolkit';
import playerInputReducer from './slices/playerInputSlice';
import gameStateReducer from './slices/gameStateSlice';

export const store = configureStore({
    reducer: {
        playerInput: playerInputReducer,
        gameState: gameStateReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
