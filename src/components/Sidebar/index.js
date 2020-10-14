import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAlt, faBook, faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { Menu } from 'react-bulma-components';
import './style.scss';

function Sidebar() {
  return (
    <Menu>
      <Menu.List>
        <li><a href="/">Gabriel Lievano</a></li>
      </Menu.List>
      <Menu.List>
        <li><a href="/"><FontAwesomeIcon icon={faCoffee} size="sm" style={{paddingRight: '8px'}} />Daily Notes</a></li>
        <li><a href="/"><FontAwesomeIcon icon={faArrowsAlt} size="sm" style={{paddingRight: '8px'}} />Graph</a></li>
        <li><a href="/"><FontAwesomeIcon icon={faBook} size="sm" style={{paddingRight: '8px'}} />All pages</a></li>
      </Menu.List>
      <Menu.List>
        <hr />
        <li><a href="/"><FontAwesomeIcon icon={faStar} size="sm" style={{paddingRight: '8px'}} />Bookmarked</a></li>
      </Menu.List>
    </Menu>
  );
}

export default Sidebar;