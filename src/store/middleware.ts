import { Middleware } from "@reduxjs/toolkit";
import { GameProgress, GameState, lostGame, wonGame } from "./slices/gameStateSlice";
import { PlayerInput } from "./slices/playerInputSlice";

export const winLossCheckMiddleware:Middleware<{}, {playerInput: PlayerInput, gameState: GameState}> = storeApi => next => action => {
    // propagate the action
    next(action);

    // check the win loss conditions
    if (action.type === "playerInput/addGuess") {
        let guesses = storeApi.getState().playerInput.guesses;
        let targetWord = storeApi.getState().gameState.targetWord;

        let gameProgress = storeApi.getState().gameState.gameProgress;
    
        if (guesses[guesses.length-1] === targetWord) {
            storeApi.dispatch(wonGame());
        }
    
        if (guesses.length === 6 && gameProgress !== GameProgress.WON) {
            storeApi.dispatch(lostGame());
        }
    }
    
}