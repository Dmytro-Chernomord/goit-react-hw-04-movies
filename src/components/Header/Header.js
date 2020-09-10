import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

console.log(s);
const Header = () => {
  return (
    <ul>
      <NavLink className={s.link} activeClassName={s.active} exact to="/">
        Home
      </NavLink>
      <NavLink className={s.link} activeClassName={s.active} to="/movies">
        Movies
      </NavLink>
    </ul>
  );
};

export default Header;
