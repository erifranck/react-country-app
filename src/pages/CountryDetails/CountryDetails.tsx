import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {fetchCountryDetails} from 'actions';
import { RootState } from 'store';
import { CountryCard } from 'components/CountryCard/CountryCard';
import { IconButton } from 'components/IconButton/IconButton';
import './CountryDetails.scss';

export const CountryDetails = () => {
  const dispatch = useDispatch();
  const countryDetails = useSelector((state: RootState) => state.countries.country);
  const params = useParams<{country: string}>();
  useEffect(() => {
    dispatch(fetchCountryDetails(params.country));
  }, [])
  return (
    <div>
      { countryDetails && <CountryCard country={countryDetails} showDetails /> }
    </div>
  );
}