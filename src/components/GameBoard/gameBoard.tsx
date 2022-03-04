import { SegmentedTextBox } from "../SegmentedTextBox/SegmentedTextBox";
import { useSelector } from "react-redux";

import './gameBoard.css';
import { selectCurrentGuessNum } from "../../store/slices/playerInputSlice";
import { GameProgress, selectGameProgress } from "../../store/slices/gameStateSlice";

export type GameBoardProps = {
    numGuesses: number,
    numChars: number,
}

export const GameBoard = (props: GameBoardProps) => {

    const currentGuessNumber = useSelector(selectCurrentGuessNum);  // will re-render after each guess
    const gameProgress = useSelector(selectGameProgress);

    const numbers: number[] = [];
    for (let i = 0; i < props.numGuesses; i++) {
        numbers.push(i);
    }
    return (
        <div className="game-board">
            {numbers.map(number => 
                <SegmentedTextBox 
                    key={number} 
                    lineNumber={number}
                    numCharacter={props.numChars}
                    isActive={number === currentGuessNumber && gameProgress === GameProgress.IN_PROGRESS}
                />
            )}
        </div>
    )
}