import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faDownload,
  faSearchPlus,
  faSearchMinus,
  faTimes,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faAt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import App from './containers/App';

require('./style/styles.scss');

library.add(
  fab,
  faBars,
  faDownload,
  faSearchPlus,
  faSearchMinus,
  faTimes,
  faMapMarkedAlt,
  faMapMarkerAlt,
  faAt,
  faPhone,
);

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app'),
);
