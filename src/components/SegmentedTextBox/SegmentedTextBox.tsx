import React, { useState, useEffect, useRef } from "react";
import { InputBox } from "./InputBox";

import './style.css';

type Props = {
    numCharacter: number;
    isActive: boolean;
}


const isAlphabetical = (character: string) => {
    const alphabetical = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return alphabetical.includes(character);
}

export const SegmentedTextBox = (props: Props) => {

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

    useEffect(() => {
        window.addEventListener('keydown', handleEvent);
    }, []);

    const handleEvent = (event: KeyboardEvent) => {
        if (props.isActive) {

            let currentInputCharacters = [...inputCharactersRef.current];
            let currentSquareIndex = activeSquareIndexRef.current;

            if (event.key === 'Backspace' && currentSquareIndex >= 0) {
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
            } else if (isAlphabetical(event.key) && currentSquareIndex <= props.numCharacter - 1) {
                // only update the last square if it is empty
                if (currentSquareIndex !== props.numCharacter - 1 || currentInputCharacters[props.numCharacter - 1] === '') {
                    currentInputCharacters[currentSquareIndex] = event.key.toUpperCase();
                    setInputCharacters(currentInputCharacters);
                    setActiveSquareIndex(currentSquareIndex === props.numCharacter - 1 ? currentSquareIndex : currentSquareIndex + 1);
                }
            }
        }
    }

    return (
        <div className="segmented-text-box">
            {numbers.map(num => <InputBox key={num} currentLetter={inputCharacters[num]}></InputBox>)}
        </div>
    );
}