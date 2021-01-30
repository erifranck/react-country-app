import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import {reducer, CountryState} from 'reducers';
import {rootSaga} from 'sagas';

export interface RootState {
  countries: CountryState;
}

const rootReducer = combineReducers({
  countries: reducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
 composeWithDevTools(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)
