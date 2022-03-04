import { configureStore } from '@reduxjs/toolkit';
import playerInputReducer from './slices/playerInputSlice';
import gameStateReducer from './slices/gameStateSlice';
import { winLossCheckMiddleware } from './middleware';

export const store = configureStore({
    reducer: {
        playerInput: playerInputReducer,
        gameState: gameStateReducer
    },
    // middleware: [winLossCheckMiddleware]
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(winLossCheckMiddleware)

});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;