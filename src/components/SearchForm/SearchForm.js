import { Link } from 'react-router-dom';
import React from 'react';
import s from './SearchForm.module.css';
import defImg from '../default.jpg';

const SearchForm = props => {
  console.log(props.movie);
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

export default SearchForm;
