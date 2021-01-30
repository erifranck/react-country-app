import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import {CountryCard} from 'components/CountryCard/CountryCard';
import {IconButton} from 'components/IconButton/IconButton';
import {fecthCountries} from 'actions';
import {RootState} from 'store';
import { Country } from 'services/countryService';
import './CountryList.scss';
import { SearchInput } from 'components/SearchInput/SearchInput';

export const CountryList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthCountries());
  }, [])
  const history = useHistory();
  const countries = useSelector((state: RootState) => state.countries.countryList);
  const [scroll, setScroll] = useState(0);
  const [searchValue, setSearch] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const handleScroll = (value: number) => () => {
    const scrollSum = scroll + value;
    if (containerRef && containerRef.current) {
      containerRef.current.scroll(scrollSum, 0);
    }
    setScroll(scrollSum < 0 ? 0 : scrollSum)
  }
  const handleCardClick = (country: Country) => {
    history.push(`/${country.name}`)
  }
  const handleSearchChange = (event:  ChangeEvent<HTMLInputElement>) => {
    setSearch(event.currentTarget.value);
  }
  const countryRegx = new RegExp(searchValue, 'i');
  return (
    <>
      <SearchInput className="country-list-search" onChange={handleSearchChange} />
      <div className="country-list-wrapper">
        <IconButton
          icon="arrow-left"
          onClick={handleScroll(-200)} />
        <div className="country-list-container" ref={containerRef}>
          {
            countries
              .filter((country) => searchValue ? countryRegx.test(country.name) : country)
              .map(( country, index ) => (
                <CountryCard country={country} key={index} onClick={() => handleCardClick(country)} />
              ))
          }
        </div>
        <IconButton
          icon="arrow-rigth"
          onClick={handleScroll(200)} />
      </div>
    </>
  );
}
