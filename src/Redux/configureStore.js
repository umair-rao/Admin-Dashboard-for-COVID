import { configureStore } from '@reduxjs/toolkit';
import covidDetailReducer from './CovidDetail';

const store = configureStore({
  reducer: {
    covidDetail: covidDetailReducer,
  },
});

export default store;
