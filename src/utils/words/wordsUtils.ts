import { validWords } from "./validWords";

export const isValidWord = (word: string) => {
    return validWords.includes(word);
}

export const getRandomWord = () => {
    return validWords[getRandomInt(validWords.length)];
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}
