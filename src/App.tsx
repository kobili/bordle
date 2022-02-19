import React from 'react';
import './App.css';

import { SegmentedTextBox } from './components/SegmentedTextBox/SegmentedTextBox';
import ReactCodeInput from 'react-code-input'

function App() {
  return (
    <div className="App">
      <SegmentedTextBox numCharacter={5} isActive={true} />
      <SegmentedTextBox numCharacter={5} isActive={false} />
    </div>
  );
}

export default App;
