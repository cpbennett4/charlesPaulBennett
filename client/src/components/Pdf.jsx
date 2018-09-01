import React from 'react';
import PropTypes from 'prop-types';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import myResume from '../style/assets/charlesPaulBennettResume.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

class Pdf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
      scale: 0.6,
    };

    this.onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    };

    this.increaseScale = () => {
      const { scale } = this.state;
      const newScale = scale * 1.1;
      this.setState({ scale: newScale });
    };

    this.decreaseScale = () => {
      const { scale } = this.state;
      const newScale = scale / 1.1;
      this.setState({ scale: newScale });
    };

    this.fetchResume = () => {
      // trigger file download without opening new window or tab
      window.location.assign('/downloadResume');
    };
  }

  componentWillMount() {
    // get width of device screen
    const deviceWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    // if width of device screen is larger than 600 px
    if (deviceWidth > 600) {
      // set scale to 1.0
      this.setState({ scale: 1 });
    }
  }

  render() {
    const { numPages, pageNumber, scale } = this.state;
    const { removePdf } = this.props;
    return (
      <div className="Pdf">
        <div className="actions">
          <p>
            Page
            {pageNumber}
            of
            {numPages}
          </p>
          <button
            type="button"
            onClick={this.fetchResume}
          >
            download
          </button>
          <button
            type="button"
            onClick={this.increaseScale}
          >
            zoom in
          </button>
          <button
            type="button"
            onClick={this.decreaseScale}
          >
            zoom out
          </button>
          <button
            type="button"
            onClick={removePdf}
          >
            Close pdf
          </button>
        </div>
        <Document
          file={myResume}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
          />
        </Document>
      </div>
    );
  }
}

Pdf.propTypes = {
  removePdf: PropTypes.func.isRequired,
};

export default Pdf;
