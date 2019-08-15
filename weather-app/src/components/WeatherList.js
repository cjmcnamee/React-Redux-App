import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Weather from './Weather';

const WeatherList = props => {
  return (
    <>
      <h1>Welcome to the Weather!<h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader
            type="Plane"
            color="00BFFF"
            height="15"
            width="100"
          />
        ) : (
          'Get Weather Data'
        )}
      </button>
       {props.weathers &&
         props.weathers.map(forecast => <Weather key={forecast.name} weather={forecast} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    weathers: state.weathers
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(WeatherList);
