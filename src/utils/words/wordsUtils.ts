import { validWords } from "./validWords";

export const isValidWord = (word: string) => {
    return validWords.includes(word);
}
