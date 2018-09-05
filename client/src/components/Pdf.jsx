import React from 'react';
import PropTypes from 'prop-types';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import PdfController from './PdfController';
import 'react-pdf/dist/Page/AnnotationLayer.css';

class Pdf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: 1,
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
    const { file, removePdf } = this.props;
    return (
      <div className="Pdf">
        <PdfController
          decreaseScale={this.decreaseScale}
          increaseScale={this.increaseScale}
          numPages={numPages}
          pageNumber={pageNumber}
          removePdf={removePdf}
        />
        <Document
          file={file}
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
  file: PropTypes.string.isRequired,
  removePdf: PropTypes.func.isRequired,
};

export default Pdf;
