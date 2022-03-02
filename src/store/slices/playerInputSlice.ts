import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { isValidWord } from "../../utils/words/wordsUtils";

export type PlayerInput = {
    guesses: string[],
};

const initialState: PlayerInput = {
    guesses: [],
};

export const playerInputSlice = createSlice({
    name: 'guesses',
    initialState,
    reducers: {
        addGuess: (state, action: PayloadAction<string>) => {
            const word = action.payload;
            if (isValidWord(word)) {
                state.guesses.push(action.payload);
            }
        },
        clearGuesses: state => {
            state.guesses = [];
        }
    }
});

// action creators
export const { addGuess, clearGuesses } = playerInputSlice.actions;

// selectors
export const selectGuesses = (state: RootState) => state.playerInput.guesses;

// reducer
export default playerInputSlice.reducer;
