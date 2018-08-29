import React from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import myResume from '../style/assets/Resume.pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPages: null,
      pageNumber: 1,
    };

    this.onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
    };
  }

  render() {
    const { numPages, pageNumber } = this.state;
    return (
      <div className="Home">
        <div className="jumboTron">
          <div className="container">
            <h1>
              Charles Paul Bennett, at your service.
            </h1>
            <h2>
              Most people just call me Chucky.
            </h2>
            <h3>
              I work with those whose passions intersect with my own in a relentlesss
              pursuit of improving the world around me.
            </h3>
            <div className="CTAButtons">
              <button type="button">
                View Resume
              </button>
              <Document
                file={myResume}
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <p>
                Page
                {pageNumber}
                of
                {numPages}
              </p>
              <button type="button">
                Contact Me
              </button>
            </div>
          </div>
          <div className="skillsLead">
            <h3>
              My most heavily relied on skills are empathy, collaboration & Javascript.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
