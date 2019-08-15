import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Weather from './Weather';

const WeatherList = props => {
  return (
    <>
      <h1>Pokemon! Gotta Catch Em All!</h1>
      <button onClick={props.getData} className="button">
        {props.isLoading ? (
          <Loader
            type="tailspin"
            color="00BFFF"
            height="20"
            width="100"
          />
        ) : (
          'Get Pokemon!'
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
