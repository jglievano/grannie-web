import React from 'react';
import Sidebar from './components/Sidebar';
import Workspace from './components/Workspace';

function App() {
  return (
    <div className="app">
      <div className="app-inner">
        <div className="cursor-listener">
          <Sidebar></Sidebar>
          <Workspace></Workspace>
        </div>
      </div>
    </div>
  );
}

export default App;
