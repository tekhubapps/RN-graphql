'use strict';

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import MoviesListScreen from './components/MoviesListScreen';
import MovieDetailScreen from './components/MovieDetailScreen';
/**
 * Registeres all teh scenes or components used in the application
 */
export default class RouteNavigator extends Component {
  render() {
    return (
      <Router>
        <Scene key="root"
          hideNavBar
        >
          <Scene key={'moviesListScreen'} component={MoviesListScreen} initial />
          <Scene key={'movieDetailScreen'} component={MovieDetailScreen}  />
        </Scene>
      </Router>
    );
  }
}
