import './App.css';

import { useSelector } from 'react-redux';
import { GameBoard } from './components/GameBoard/gameBoard';
import { selectNumMaxGuesses } from './store/slices/gameStateSlice';

function App() {
  const numGuesses = useSelector(selectNumMaxGuesses);

  return (
    <div className="App">
      <GameBoard numGuesses={numGuesses} numChars={5}></GameBoard>
    </div>
  );
}

export default App;
