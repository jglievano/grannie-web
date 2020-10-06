import React from 'react';

function Workspace() {
  return (
    <div className="workspace">
      <div className="workspace-toolbar">
        <span>OK</span>
        <span>Search</span>
        <span>Cal</span>
        <span>Menu</span>
      </div>
      <div className="workspace-page">
        <h1 className="">October 3, 2020</h1>
        <div className="workspace-page-content">
          <div className="workspace-page-item">
            <div className="page-item-controls">

            </div>
            <div className="page-item-input">
              <span>Hello</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workspace;