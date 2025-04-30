import HelloCGU from './cgu_hello';
import MultiButton from './cgu_multiButton';
import './App.css';
import React from 'react';

 
function App() {
  return (
    <div className="App">
      <div>
        { HelloCGU() }
      </div>
      <div>
      <MultiButton num={3} />
      </div>
    </div>
  );
}
 export default App;