import React, { useState, useEffect, useRef } from "react";
import { InputBox } from "./InputBox";
import { useAppDispatch, useKeyPress } from "../../store/hooks";

import './style.css';
import { addGuess, selectCurrentGuessNum } from "../../store/slices/playerInputSlice";
import { isValidWord } from "../../utils/words/wordsUtils";
import { useSelector } from "react-redux";

type Props = {
    numCharacter: number;
    isActive: boolean;
    lineNumber: number;
}

const isAlphabetical = (character: string) => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowerCaseAlphabetArray = alphabet.split('');
    const upperCaseAlphabetArray = alphabet.toUpperCase().split('');

    return lowerCaseAlphabetArray.includes(character) || upperCaseAlphabetArray.includes(character);
}

export const SegmentedTextBox = (props: Props) => {
    const dispatch = useAppDispatch();
    const currentGuessNum = useSelector(selectCurrentGuessNum);

    const numbers: number[] = [];
    const initialInputs: string[] = [];
    for (let i = 0; i < props.numCharacter; i++) {
        numbers.push(i);
        initialInputs.push("");
    }

    const [inputCharacters, _setInputCharacters] = useState(initialInputs);
    const [activeSquareIndex, _setActiveSquareIndex] = useState(0);

    const inputCharactersRef = useRef(inputCharacters);
    const setInputCharacters = (value: string[]) => {
        inputCharactersRef.current = value;
        _setInputCharacters(value);
    }

    const activeSquareIndexRef = useRef(activeSquareIndex);
    const setActiveSquareIndex = (value: number) => {
        activeSquareIndexRef.current = value;
        _setActiveSquareIndex(value);
    }

    const keyPress = useKeyPress();

    useEffect(() => {
        if (props.isActive) {
            let currentInputCharacters = [...inputCharactersRef.current];
            let currentSquareIndex = activeSquareIndexRef.current;

            const guess = currentInputCharacters.join('');

            if (keyPress.key === 'Backspace' && currentSquareIndex >= 0) {
                if (currentInputCharacters[currentSquareIndex] === '') {
                    // delete the previous square if index != 0
                    if (currentSquareIndex !== 0) {
                        currentInputCharacters[currentSquareIndex - 1] = '';
                        setInputCharacters(currentInputCharacters);
                        setActiveSquareIndex(currentSquareIndex - 1);
                    }
                } else {
                    // delete the current square
                    currentInputCharacters[currentSquareIndex] = '';
                    setInputCharacters(currentInputCharacters);
                    setActiveSquareIndex(currentSquareIndex);
                }
            } else if (isAlphabetical(keyPress.key) && currentSquareIndex <= props.numCharacter - 1) {
                // only update the last square if it is empty
                if (currentSquareIndex !== props.numCharacter - 1 || currentInputCharacters[props.numCharacter - 1] === '') {
                    currentInputCharacters[currentSquareIndex] = keyPress.key.toUpperCase();
                    setInputCharacters(currentInputCharacters);
                    setActiveSquareIndex(currentSquareIndex === props.numCharacter - 1 ? currentSquareIndex : currentSquareIndex + 1);
                }
            } else if (keyPress.key === 'Enter' && guess.length !== 0) {    // second clause prevents submitting when line is empty
                if (isValidWord(guess)) {
                    dispatch(addGuess(guess));
                } else {
                    alert(`${guess} is not a valid word`);  // TODO: replace this with something unobstructive
                }
            }
        }
    }, [keyPress]);

    return (
        <div className="segmented-text-box">
            {numbers.map(num => 
                <InputBox 
                    key={num} 
                    currentLetter={inputCharacters[num]} 
                    isLockedIn={props.lineNumber < currentGuessNum && !props.isActive}/>)
            }
        </div>
    );
}