import {ActionPattern, call, put, takeLatest} from 'redux-saga/effects';
import {
  FETCH_COUNTRY,
  fetchCountriesSuccess,
  fetchFail,
  FETCH_COUNTRY_DETAILS,
  fetchCountryDetailsSuccess
} from 'actions'
import {getCountries, getCountry} from 'services/countryService'

const fetchCountries = function* () {
  const response = yield call(getCountries)
  if (response.data) {
    yield put(fetchCountriesSuccess(response.data))
  } else {
    yield put((response.error))
  }
}


const fetchCountryDetails = function* (action: {type: string, countryName: string}) {
  const response = yield call(getCountry, action.countryName)
  if (response.data) {
    yield put(fetchCountryDetailsSuccess(response.data[0]))
  } else {
    yield put(fetchFail(response.error))
  }
}

export const rootSaga = function* () {
  yield takeLatest(FETCH_COUNTRY, fetchCountries)
  yield takeLatest(FETCH_COUNTRY_DETAILS, fetchCountryDetails)
}
