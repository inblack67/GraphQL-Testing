import React, { useEffect } from 'react';
import Repos from './components/Repos';

// styles
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

function App() {

  useEffect(() => {
    M.AutoInit();
  },[])

  return (
    <div className="container">
      <p className="flow-text center">Repos</p>
      <Repos />
    </div>
  );
}

export default App;
