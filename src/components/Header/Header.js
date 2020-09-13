import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import routes from '../../routes';

const Header = () => {
  return (
    <ul className={s.ul}>
      <NavLink
        className={s.link}
        activeClassName={s.active}
        exact
        to={routes.home}
      >
        Home
      </NavLink>
      <NavLink className={s.link} activeClassName={s.active} to={routes.movies}>
        Movies
      </NavLink>
    </ul>
  );
};

export default Header;
