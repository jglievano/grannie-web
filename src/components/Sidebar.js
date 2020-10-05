import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar-container noselect">
      <div className="flex-v-box sidebar-content">
        <div className="flex-h-box top-row"><span>forge</span></div>
        <div className="sidebar-button">
          <FontAwesomeIcon icon={faCoffee} />
          Daily Notes
        </div>
        <div className="sidebar-button">
          <span>Graph</span>
        </div>
        <div className="sidebar-button">
          <span>All pages</span>
        </div>
        <div className="flex-v-box starred-pages-wrapper">
          <div style={{flex: '0 0 1px', backgroundColor: 'rgb(57, 75, 89)'}}></div>
          <div style={{flex: '0 0 16px'}}></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;