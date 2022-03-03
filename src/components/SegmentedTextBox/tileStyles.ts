export type Style = {
    backgroundColor: string
}

export const wrongCharacterStyle: Style = {
    backgroundColor: '#787c7e' // grey
}

export const hintCharacterStyle: Style = {
    backgroundColor: '#c9b458' // yellow
}

export const correctCharacterStyle: Style = {
    backgroundColor: '#6aaa64' // green
}

export const selectStyle = (character: string, targetWord: string, characterIndex: number, isLockedIn: boolean): Style | undefined => {

    if (isLockedIn) {
        // logic to determine style
        if (targetWord.split('')[characterIndex] === character) {
            return correctCharacterStyle;
        } else if (targetWord.split('').includes(character)) {
            return hintCharacterStyle;
        } else {
            return wrongCharacterStyle;
        }

    }
    return undefined;
}

export const getStylesForLine = (inputCharacters: string[], targetWord: string): Style[] => {
    let retArr: Style[] = [];
    let targetWordCharacters = targetWord.split('');

    for (let i = 0; i < inputCharacters.length; i++) {
        const currChar = inputCharacters[i];
        if (targetWordCharacters[i] === currChar) {
            retArr.push(correctCharacterStyle);
            targetWordCharacters[i] = '';       // remove the character from the array
        } else if (targetWordCharacters.includes(currChar)) {
            retArr.push(hintCharacterStyle);
            findAndReplace(targetWordCharacters, currChar);
        } else {
            retArr.push(wrongCharacterStyle);
        }
    }

    return retArr;
}

/**
 * Finds the first instance of char in charArray and replaces it with ''
 * Assumes that char exists in charArray
 */
const findAndReplace = (charArray: string[], char: string): void => {
    for (let j = 0; j < charArray.length; j++) {
        if (charArray[j] === char) {
            charArray[j] = '';
            return;
        }
    }
}