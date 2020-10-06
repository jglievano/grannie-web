import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowsAlt, faBook, faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

function Sidebar() {
  return (
    <div className="sidebar-container noselect">
      <div className="flex-v-box sidebar-content">
        <div className="flex-h-box top-row">forge<FontAwesomeIcon icon={faArrowDown} size="sm" /></div>
        <div className="sidebar-button">
          <FontAwesomeIcon icon={faCoffee} size="sm" style={{paddingRight: '8px'}} />
          Daily Notes
        </div>
        <div className="sidebar-button">
          <FontAwesomeIcon icon={faArrowsAlt} size="sm" style={{paddingRight: '8px'}} />
          Graph
        </div>
        <div className="sidebar-button">
          <FontAwesomeIcon icon={faBook} size="sm" style={{paddingRight: '8px'}} />
          All pages
        </div>
        <div className="flex-v-box starred-pages-wrapper">
          <div style={{flex: '0 0 1px', backgroundColor: 'rgb(57, 75, 89)'}}></div>
          <div style={{flex: '0 0 16px'}}></div>
          <div className="flex-h-box">
            <FontAwesomeIcon icon={faStar} size="sm" style={{paddingRight: '8px'}} />
          </div>
        </div>
        <div className="sidebar-button">
          <span style={{fontWeight: 'bold'}}>Grannie</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;