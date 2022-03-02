import { SegmentedTextBox } from "../SegmentedTextBox/SegmentedTextBox";

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
        <div id="game-board">
            {numbers.map(number => <SegmentedTextBox numCharacter={props.numChars} isActive={number === 0}></SegmentedTextBox>)}
        </div>
    )
}