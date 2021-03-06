import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export enum GameProgress {
    IN_PROGRESS = "in progress",
    WON = "won",
    LOST = "lost",
}

export type GameState = {
    targetWord: string,
    gameProgress: GameProgress,
    numGuesses: number,
}

const initialState: GameState = {
    targetWord: "DEEPS",
    gameProgress: GameProgress.IN_PROGRESS,
    numGuesses: 6,
}

export const gameStateSlice = createSlice({
    name: 'gameState',
    initialState,
    reducers: {
        updateTargetWord: (state, action: PayloadAction<string>) => {
            state.targetWord = action.payload;
        },
        wonGame: (state) => {
            if (state.gameProgress === GameProgress.IN_PROGRESS) {
                state.gameProgress = GameProgress.WON;
            }
        },
        lostGame: (state) => {
            if (state.gameProgress === GameProgress.IN_PROGRESS) {
                state.gameProgress = GameProgress.LOST;
            }
        }
    }
});

// action creators
export const { updateTargetWord, wonGame, lostGame } = gameStateSlice.actions;

// selectors
export const selectGameProgress = (state: RootState) => state.gameState.gameProgress;
export const selectTargetWord = (state: RootState) => state.gameState.targetWord;
export const selectNumMaxGuesses = (state: RootState) => state.gameState.numGuesses;
// reducer
export default gameStateSlice.reducer;
