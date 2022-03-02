import { SegmentedTextBox } from "../SegmentedTextBox/SegmentedTextBox";

import './gameBoard.css';

export type GameBoardProps = {
    numGuesses: number,
    numChars: number,
}

export const GameBoard = (props: GameBoardProps) => {
    const numbers: number[] = [];

    for (let i = 0; i < props.numGuesses; i++) {
        numbers.push(i);
    }
    return (
        <div className="game-board">
            {numbers.map(number => <SegmentedTextBox key={number} numCharacter={props.numChars} isActive={number === 0} />)}
        </div>
    )
}