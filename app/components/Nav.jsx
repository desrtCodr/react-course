import * as React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { sunIcon, moonIcon } from './icons';

export default function Nav({ theme, toggleTheme }) {
  return (
    <nav className='split'>
      <NavLink
        to='/'
        className={({ isActive }) =>
          'nav-link' + (isActive ? ' active' : '')
        }
      >
        Github Battle
      </NavLink>
      <ul className='row'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' active' : '')
            }
          >
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/battle'
            className={({ isActive }) =>
              'nav-link' + (isActive ? ' active' : '')
            }
          >
            Battle
          </NavLink>
        </li>
        <li>
          <button
            className='btn secondary icon'
            onClick={toggleTheme}
          >
            {theme === 'light' ? sunIcon : moonIcon}
          </button>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
