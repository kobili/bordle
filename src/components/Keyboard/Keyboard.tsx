import './styles.css';
import { Key } from "./Key"

const firstRow = "qwertyuiop";
const secondRow = "asdfghjkl";
const thirdRow = "zxcvbnm";

export const Keyboard = () => {

    return (
        <div id="keyboard">
            <div className="row">
                {firstRow.split('').map(letter => <Key key={letter} letter={letter.toUpperCase()}/>)}
            </div>
            <div className="row">
                <div className='spacer half'></div>
                {secondRow.split('').map(letter => <Key key={letter} letter={letter.toUpperCase()}/>)}
                <div className='spacer half'></div>
            </div>
            <div className="row">
                <Key letter={"Enter"}/>
                {thirdRow.split('').map(letter => <Key key={letter} letter={letter.toUpperCase()}/>)}
                <Key letter={"Backspace"}/>
            </div>
        </div>
        
    );
}