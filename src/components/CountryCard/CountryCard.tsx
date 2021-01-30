import { MapContainer } from 'components/GoogleMapsContainer/GoogleMapsContainer';
import { IconButton } from 'components/IconButton/IconButton';
import React, { MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import {Country} from 'services/countryService';
import { classNames } from 'utils/classnames';
import './CountryCard.scss';

interface Props {
  onClick?: (event: MouseEvent) => void;
  country: Country;
  showDetails?: boolean; 
}

export const CountryCard: React.FC<Props> = (props) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack()
  }
  return (
    <div className={classNames({
      'country-card-wrapper': true,
      'full': !!props.showDetails
    })} onClick={props.onClick}>
      <div className="country-card-container">
        <div className="country-card-content">
          {
            props.showDetails ? (
              <div className="country-card-details-wrapper">
                <IconButton className="times-button" icon={'times'} onClick={goBack} />
                <div className="country-card-details-row">
                  <img src={props.country.flag} className="country-card-details-flag" />
                  <div className="country-card-details-col">
                    <h2 className="country-card-details-title">
                      {props.country.name}
                    </h2>
                    <div className="country-card-details-row">
                      <div className="country-card-details-col">
                        <div className="country-card-details-info">
                          <b>capital:</b>
                          <span> {props.country.capital} </span>
                        </div>
                        <div className="country-card-details-info">
                          <b>region:</b>
                          <span> {props.country.region} </span>
                        </div>
                      </div>
                      <div className="country-card-details-col">
                        <div className="country-card-details-info">
                          <b>population:</b>
                           <span> {props.country.population} </span>
                        </div>
                        <div className="country-card-details-info">
                          <b>area:</b>
                          <br/>
                          <span> {props.country.area} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="country-card-details-col">
                  </div>
                </div>
                <div className="country-card-map">
                  <MapContainer
                    position={
                      {
                        lat: props.country.latlng[0],
                        lng: props.country.latlng[1]
                      }
                    }
                  />
                </div>
              </div>
            ): (
              <>
                <img
                  className="country-card-flag"
                  src={props.country.flag}
                  alt={`flag ${props.country.name}`}
                />
                <p className="country-card-name">
                  {props.country.name}
                </p>
                <p>
                  {props.country.timezones[0]}
                </p>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}