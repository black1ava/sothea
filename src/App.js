import React, { useState }  from 'react';
import Mak from './Mak';
import Tharath from './Tharath';

function App() {

  const [section, setSection] = useState('hola');

  function showHola(){
    setSection('hola');
  }

  function showMak(){
    setSection('mak');
  }

  function showTharath(){
    setSection('tharath');
  }

  return (
    <div>
      <button onClick={ showHola }>Hola</button>
      <button onClick={ showMak }>Mak</button>
      <button onClick={ showTharath }>Tharath</button>
      { section === 'hola' && <h1>Hola</h1> }
      { section === 'mak' && <Mak /> }
      { section === 'tharath' && <Tharath /> }
    </div>
  );
}

export default App;
