import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faBook, faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div style={{color: 'rgba(25, 23, 17, 0.6)', fontWeight: '500', height: '100%'}}>
        <div style={{position: 'absolute', top: '0px', left: '0px', bottom: '0px', display: 'flex', flexDirection: 'column', width: '0px', overflow: 'visible', zIndex: '9', pointerEvents: 'none'}}>
          <div className="sidebar">
            <div style={{display: 'block', flexShrink: '0', flexGrow: '0'}}>
              <div className="sidebar-switcher">
                <div className="sidebar-switcher-container">
                  <div className="sidebar-switcher-icon-container">
                    <div className="sidebar-switcher-icon" role="button" aria-disabled="true" tabindex="-1">
                      <div className="sidebar-switcher-icon-border">
                        <div className="sidebar-switcher-font">G</div>
                      </div>
                    </div>
                  </div>
                  <div className="sidebar-switcher-selector">
                    <div className="sidebar-switcher-selector-inner">
                      <div className="sidebar-switcher-selector-title-container">
                        <div className="sidebar-switcher-selector-title">
                          Gabriel Lievano
                        </div>
                        <div classname="sidebar-switcher-selector-border"></div>
                      </div>
                      <div className="sidebar-switcher-selector-handler">
                        <svg className="expand"
                             viewBox="-1 -1 9 11" style={{width: '100%', height: '100%', display: 'block', fill: 'inherit', flexShrink: '0', backfaceVisibility: 'hidden'}}>
                          <path id="path0_stroke"
                                d="M 3.5 0L 3.98809 -0.569442L 3.5 -0.987808L 3.01191 -0.569442L 3.5 0ZM 3.5 9L 3.01191 9.56944L 3.5 9.98781L 3.98809 9.56944L 3.5 9ZM 0.488094 3.56944L 3.98809 0.569442L 3.01191 -0.569442L -0.488094 2.43056L 0.488094 3.56944ZM 3.01191 0.569442L 6.51191 3.56944L 7.48809 2.43056L 3.98809 -0.569442L 3.01191 0.569442ZM -0.488094 6.56944L 3.01191 9.56944L 3.98809 8.43056L 0.488094 5.43056L -0.488094 6.56944ZM 3.98809 9.56944L 7.48809 6.56944L 6.51191 5.43056L 3.01191 8.43056L 3.98809 9.56944Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              <div className="flex-h-box"f>
                <FontAwesomeIcon icon={faStar} size="sm" style={{paddingRight: '8px'}} />
              </div>
            </div>
            <div className="sidebar-button">
              <span style={{fontWeight: 'bold'}}>Grannie</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;