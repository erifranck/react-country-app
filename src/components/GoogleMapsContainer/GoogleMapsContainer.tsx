import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import './GoogleMapsContainer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faMapSigns, faMarker } from '@fortawesome/free-solid-svg-icons';
 
interface Props  {
    position: {
        lat: number;
        lng: number;
    }
}

// set an api key to show google map
const GOOGLE_API = '';

interface MarkerProps {
  lat: number;
  lng: number;
}

const Marker: React.FC<MarkerProps> = () => (
  <FontAwesomeIcon className="map-marker" icon={faMapMarkedAlt}/>
);

export class MapContainer extends Component<Props> {
  render() {
    return (
     <div className="map-wrapper">
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_API }}
          defaultCenter={this.props.position}
          defaultZoom={5}
        >
          <Marker
            lat={this.props.position.lat}
            lng={this.props.position.lng}
          />
        </GoogleMapReact>
      </div> 
    );
  }
}