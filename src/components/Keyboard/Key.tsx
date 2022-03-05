import './styles.css';

const dispatchKeyboardEvent = (key: string) => () => {
    window.dispatchEvent(new KeyboardEvent('keydown', {
        'key': key
      }));
}

type Props = {
    letter: string;
}

export const Key = (props: Props) => {
    return (
        <button onClick={dispatchKeyboardEvent(props.letter)} id={`keyboard-key-${props.letter.toLowerCase()}`}>
            {props.letter === "Backspace" ? "Bsp" : props.letter}
        </button>
    )
}
