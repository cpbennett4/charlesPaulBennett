import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const fetchResume = () => {
  // trigger file download without opening new window or tab
  window.location.assign('/downloadResume');
};

const PdfController = (props) => {
  const {
    decreaseScale, increaseScale, numPages, pageNumber, removePdf,
  } = props;
  return (
    <div className="PdfController">
      <p>
        {`${pageNumber}/${numPages}`}
      </p>
      <FontAwesomeIcon icon="download" onClick={fetchResume} />
      <FontAwesomeIcon icon="search-plus" onClick={increaseScale} />
      <FontAwesomeIcon icon="search-minus" onClick={decreaseScale} />
      <FontAwesomeIcon icon="times" onClick={removePdf} />
    </div>
  );
};

PdfController.propTypes = {
  decreaseScale: PropTypes.func.isRequired,
  increaseScale: PropTypes.func.isRequired,
  numPages: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  removePdf: PropTypes.func.isRequired,
};

export default PdfController;
