import { Style } from "./tileStyles";

export type Props = {
    key: number;
    index: number;
    currentLetter: string;
    isLockedIn: boolean;
    style?: Style
}

export const InputBox = (props: Props) => {
    const style = props.style ? props.style : {};
    return (
        <div className="input-box" style={style}>{props.currentLetter}</div>
    );
}