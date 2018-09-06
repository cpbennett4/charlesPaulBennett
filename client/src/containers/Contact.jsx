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
        The hardest part of anything is simply getting started.
      </h3>
    </div>
    <div className="contactInfo">
      <h2>
        Communication
      </h2>
      <div className="contactCards">
        <div id="location">
          <FontAwesomeIcon size="2x" icon="map-marked-alt" />
          <p>
            Palo Alto, CA
          </p>
        </div>
        <div id="email">
          <FontAwesomeIcon size="2x" icon="at" />
          <p>
            <a href="mailto:cpbennett4@gmail.com">
              cpbennett4@gmail.com
            </a>
          </p>
        </div>
        <div id="phone">
          <FontAwesomeIcon size="2x" icon="phone" />
          <p>
            <a href="tel:7656354700">
              765.635.4700
            </a>
          </p>
        </div>
      </div>
    </div>
    <div className="social">
      <h2>
        Networks and Blog
      </h2>
      <ul>
        <li id="linkedin">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.linkedin.com/in/cpbennett4"
          >
            <FontAwesomeIcon size="3x" icon={['fab', 'linkedin']} />
          </a>
        </li>
        <li id="github">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.github.com/cpbennett4"
          >
            <FontAwesomeIcon size="3x" icon={['fab', 'github']} />
          </a>
        </li>
        <li id="medium">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.medium.com/@cpbennett4"
          >
            <FontAwesomeIcon size="3x" icon={['fab', 'medium']} />
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
