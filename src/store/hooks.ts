import { useState, useEffect } from "react";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

type KeyPressState = {
    key: string;
}

export const useKeyPress = () => {
    const [keyPressed, setKeyPressed] = useState({key: ""} as KeyPressState);

    const downHandler = (event: KeyboardEvent ) => {
        setKeyPressed({
            ... keyPressed,
            key: event.key
        });
    };

    useEffect(() => {
        window.addEventListener('keydown', downHandler);

        return () => {
        window.removeEventListener('keydown', downHandler);
        };
    }, []);

    return keyPressed;
};