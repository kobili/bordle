import React from "react";

export type Props = {
    key: number;
    currentLetter: string;
    isLockedIn: boolean;
}

export const InputBox = (props: Props) => {
    const displayText = props.currentLetter + (props.isLockedIn ? "*" : "");
    return (
        <div className="input-box" >{displayText}</div>
    );
}