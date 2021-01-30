import {Country} from 'services/countryService'
import {START_FETCH, FETCH_FAIL, FETCH_COUNTRY_SUCCESS, FETCH_COUNTRY_DETAILS, FETCH_COUNTRY_DETAILS_SUCCESSS} from 'actions'
import {Action} from 'redux'

export interface CountryState  {
  isFetch: boolean;
  countryList: Country[];
  country?: Country;
}
interface CountryAction extends Action {
  payload?: Country[];
  country?: Country;
  error: string;
}

const INITIAL_STATE: CountryState = {
  isFetch: false,
  countryList: []
}

export function reducer(state = INITIAL_STATE, action: CountryAction) {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        isFetch: true
      }
    case FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        countryList: action.payload,
        isFetch: false
      }
    case FETCH_COUNTRY_DETAILS_SUCCESSS:
      return {
        ...state,
        country: action.country,
        isFetch: false
      }
    case FETCH_FAIL:
      return {
        ...state,
        error: action.error,
        isFetch: false
      }
    default:
      return state
  }
}
