import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleMapReact from 'google-map-react';
import Config from '../../../.config';

// must use custom component to avoid google maps api errors
const MapMarker = () => (
  <div id="mapMarker">
    <FontAwesomeIcon
      size="3x"
      icon="map-marker-alt"
    />
  </div>
);

const Contact = () => (
  <div className="Contact">
    <div className="jumboTron">
      <h1>
        Lets Collaborate
      </h1>
      <h3>
        The hardest part of any important task is getting started on it in the first Place.
      </h3>
      <h5>
        -Brian Tracy
      </h5>
    </div>
    <div className="contactInfo">
      <div id="location">
        <FontAwesomeIcon size="lg" icon="map-marked-alt" />
      </div>
      <div id="email">
        <FontAwesomeIcon size="lg" icon="at" />
      </div>
      <div id="phone">
        <FontAwesomeIcon size="lg" icon="phone" />
      </div>
    </div>
    <div className="social">
      <h1>
        Please feel free to connect with me on LinkedIn, GitHub, and Medium
      </h1>
      <ul>
        <li id="linkedin">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.linkedin.com/in/cpbennett4"
          >
            <FontAwesomeIcon size="lg" icon={['fab', 'linkedin']} />
          </a>
        </li>
        <li id="github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.github.com/cpbennett4"
          >
            <FontAwesomeIcon size="lg" icon={['fab', 'github']} />
          </a>
        </li>
        <li id="medium">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.medium.com/@cpbennett4"
          >
            <FontAwesomeIcon size="lg" icon={['fab', 'medium']} />
          </a>
        </li>
      </ul>
    </div>
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: Config.GOOGLE_MAPS_API }}
        defaultCenter={{ lat: 37.4215, lng: -122.1149 }}
        defaultZoom={12}
      >
        <MapMarker
          lat={37.4215}
          lng={-122.1149}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Contact;
