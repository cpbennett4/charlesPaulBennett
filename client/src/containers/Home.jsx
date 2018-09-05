import React from 'react';
import PropTypes from 'prop-types';
import Pdf from '../components/Pdf';
import myResume from '../style/assets/charlesPaulBennettResume.pdf';

const Home = (props) => {
  const { showingPdf, showPdf, removePdf } = props;
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
            onClick={showPdf}
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
        showingPdf ? <Pdf removePdf={removePdf} file={myResume} /> : home
      }
    </div>
  );
};

Home.propTypes = {
  showingPdf: PropTypes.bool.isRequired,
  showPdf: PropTypes.func.isRequired,
  removePdf: PropTypes.func.isRequired,
};

export default Home;
