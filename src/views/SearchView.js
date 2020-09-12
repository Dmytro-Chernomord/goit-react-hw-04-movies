import { Link } from 'react-router-dom';
import React, { Component } from 'react';

const SearchView = props => {
  return (
    <ul>
      {props.movie.length > 0 &&
        props.movie.map(el => (
          <li key={el.id}>
            <Link
              //   to={`/movies/${el.id}`}
              to={{
                pathname: `/movies/${el.id}`,
                state: { from: props.location },
              }}
            >
              {el.name || el.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default SearchView;

// export class SearchView extends Component {
//   state = {
//     movies: this.props.movie,
//   };

//   render() {
//     return (
//       <ul>
//         {this.state.movies.length > 0 &&
//           this.state.movies.map(el => (
//             <li key={el.id}>
//               <Link
//                 to={{
//                   pathname: `/movies/${el.id}`,
//                   state: { from: this.props.location },
//                 }}
//               >
//                 {el.name || el.title}
//               </Link>
//             </li>
//           ))}
//       </ul>
//     );
//   }
// }

// export default SearchView;
