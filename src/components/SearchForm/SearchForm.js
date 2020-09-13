import { Link } from 'react-router-dom';
import React from 'react';
import s from './SearchForm.module.css';
import defImg from '../default.jpg';
import PropTypes from 'prop-types';

const SearchForm = props => {
  return (
    <ul className={s.ul}>
      {props.movie.length > 0 &&
        props.movie.map(el => (
          <li key={el.id} className={s.li}>
            <Link
              className={s.a}
              to={{
                pathname: `/movies/${el.id}`,
                state: { from: props.location },
              }}
            >
              <img
                className={s.img}
                width="100"
                src={
                  el.backdrop_path
                    ? `https://image.tmdb.org/t/p/w300/${el.backdrop_path}`
                    : defImg
                }
                alt=""
              />
              {el.name || el.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

SearchForm.propTypes = {
  movie: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
};
export default SearchForm;
