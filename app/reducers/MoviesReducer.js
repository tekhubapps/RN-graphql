'use strict';

import { ACTIONS } from '../util/Actions';

const initialState = {
  selectedMovie: {},
};

const { SET_SELECTED_MOVIE } = ACTIONS;
/**
 * Sets the selected movie in the state
 * @param {*} state state of the component
 * @param {*} action action dispatched 
 */
export const selectedMovieState = (state = initialState, action) => {
  const { 
    type,
    selectedMovie,
  } = action;

  switch(type) {
    case SET_SELECTED_MOVIE: 
      return { ...state, selectedMovie };
    default:
      return state;
  }
};