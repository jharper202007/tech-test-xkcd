import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navigation.module.css';

const Navigation = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navbar}>
      <li>
        <NavLink to="/" exact>Current</NavLink>
      </li>
      <li>
        <NavLink to="/search">Find comic by ID</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;