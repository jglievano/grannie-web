import React from 'react';
import './style.scss';

function Workspace() {
  return (
    <div className="workspace">
      <div className="workspace-toolbar">
        <div class="flex-h-box" style={{height: '100%', alignItems: 'center'}}>
          <span>OK</span>
          <span>Search</span>
          <span>Cal</span>
          <span>Menu</span>
        </div>
      </div>
      <div className="workspace-main flex-h-box" style={{height: 'calc(100% - 45px)', top: '45px', position: 'fixed', right: '0px', width: 'calc(-232px + 100vw)'}}>
        <div style={{height: '100%', flex: '1 1 65%'}}>
          <div style={{paddingRight: 'calc(50% - 284px)', paddingLeft: 'calc(50% - 516px)', height: '100%', overflow: 'hidden scroll'}}>
            <div className="workspace-article">
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
        </div>
      </div>
    </div>
  );
}

export default Workspace;