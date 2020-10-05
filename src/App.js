import React from 'react';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';

function App() {
  return (
    <div className="grannie-body">
      <div className="grannie-app">
        <Sidebar></Sidebar>
        <Workspace></Workspace>
      </div>
    </div>
  );
}

export default App;
