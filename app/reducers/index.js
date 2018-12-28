'use strict';

import { combineReducers } from 'redux';

import { selectedMovieState } from './MoviesReducer';

//Combines all the reducer for the store and exports to it
const rootReducer = combineReducers({
  selectedMovieState,
});
  
export default rootReducer;