// import './App.css';

import { SegmentedTextBox } from './components/SegmentedTextBox/SegmentedTextBox';
import { GameBoard } from './components/GameBoard/gameBoard';

function App() {
  return (
    <div className="App">
      <GameBoard numGuesses={6} numChars={5}></GameBoard>
    </div>
  );
}

export default App;
