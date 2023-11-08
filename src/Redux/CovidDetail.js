import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const COIVD_DETAIL = 'CovidData/CovidData/COIVD_DETAIL';
const baseURL = 'https://disease.sh/v3/covid-19/countries';

export const fetchCovidDetail = createAsyncThunk(
  COIVD_DETAIL,
  async (countryName, { dispatch }) => {
    const response = await axios.get(baseURL);
    dispatch({ type: COIVD_DETAIL, payload: response.data });
  },
);

const initialState = { covidDetail: [] };
const fetchCovidDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case COIVD_DETAIL:
      return {
        ...state,
        covidDetail: action.payload,
      };
    default:
      return state;
  }
};
export default fetchCovidDetailReducer;
