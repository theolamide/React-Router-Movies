import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import MovieList from "./Movies/MovieList";


const App = () => {
  const [savedList, setSavedList] = useState( [] );
  const [movieList] = useState ([]);

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact 
            path = "/"
            component = {MovieList} 
            // render = {props => (
            //   <MovieList 
            //   {...props}
              // movies = {movieList} 
              
              // />
            // )}    
          />

      <Route 
          path = "Movie/:id"
          render = {props => <MovieList {...props} movies = {movieList} />}
          />

    </div>
  );
};

export default App;
 