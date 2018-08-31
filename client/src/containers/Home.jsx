import React from 'react';
import Pdf from '../components/Pdf';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPdf: false,
    };

    this.showPdf = () => {
      this.setState({ showPdf: true });
    };

    this.removePdf = () => {
      this.setState({ showPdf: false });
    };
  }

  render() {
    const { showPdf } = this.state;
    const home = (
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
            <button
              type="button"
              onClick={this.showPdf}
            >
              View Resume
            </button>
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
    );
    return (
      <div className="Home">
        {
          showPdf ? <Pdf removePdf={this.removePdf} /> : home
        }
      </div>
    );
  }
}

export default Home;
