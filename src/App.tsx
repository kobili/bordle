import './App.css';

import { SegmentedTextBox } from './components/SegmentedTextBox/SegmentedTextBox';

function App() {
  return (
    <div className="App">
      <SegmentedTextBox numCharacter={5} isActive={true} />
      <SegmentedTextBox numCharacter={5} isActive={false} />
    </div>
  );
}

export default App;
