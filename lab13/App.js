import HelloCGU from './cgu_hello';
import MultiButton from './cgu_multiButton';
import './App.css';
import CGU_Login from './cgu_login';
import React from 'react';

 
function App() {
  return (
    <div className="App">
      <div>
        { CGU_Login() }
      </div>
    </div>
  );
}
 export default App;