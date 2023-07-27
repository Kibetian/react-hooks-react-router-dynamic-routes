// // import React from "react";
// // import ReactDOM from "react-dom";
// // import { BrowserRouter as Router } from "react-router-dom";
// // import App from "./components/App";

// // ReactDOM.render(
// //   <Router>
// //     <App />
// //   </Router>,
// //   document.getElementById("root")
// // );
// import React from "react";
// import { Route, useRouteMatch } from "react-router-dom";
// import MoviesList from "./MoviesList";
// import MovieShow from "./MovieShow";

// function MoviesPage({ movies }) {
//   const match = useRouteMatch();

//   return (
//     <div>
//       <MoviesList movies={movies} />
//       <Route exact path={`${match.url}`}>
//         <h3>Choose a movie from the list above</h3>
//       </Route>
//       <Route path={`${match.url}/:movieId`}>
//         <MovieShow movies={movies} />
//       </Route>
//     </div>
//   );
// }

// export default MoviesPage;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

