import {Country} from 'services/countryService';
export const START_FETCH = 'START_FETCH';
export const FETCH_COUNTRY = 'FETCH_COUNTRY';
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS';
export const FETCH_COUNTRY_DETAILS = 'FETCH_COUNTRY_DETAILS';
export const FETCH_COUNTRY_DETAILS_SUCCESSS = 'FETCH_COUNTRY_DETAILS_SUCCESSS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const fetchStart = () => {
  return {
    type: START_FETCH,
  }
}

export const fetchCountryDetails = (countryName: string) => {
  return {
    type: FETCH_COUNTRY_DETAILS,
    countryName
  }
}
export const fetchCountryDetailsSuccess = (country: Country) => {
  return {
    type: FETCH_COUNTRY_DETAILS_SUCCESSS,
    country
  }
}

export const fecthCountries = () => {
  return {
    type: FETCH_COUNTRY,
  }
}
export const fetchCountriesSuccess = (payload: Country[]) => {
  return {
    type: FETCH_COUNTRY_SUCCESS,
    payload
  }
}

export const fetchFail = (error: string) => {
  return {
    type: FETCH_FAIL,
    error
  }
}
