import React from "react";

export type Props = {
    key: number;
    currentLetter: string;
}

export const InputBox = (props: Props) => {
    return (
        <div className="input-box" >{props.currentLetter}</div>
    );
}