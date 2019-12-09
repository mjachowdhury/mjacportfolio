import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="Landing-grid">
          <Cell col={12}></Cell>
          <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          <div className="banner-text">
            <h4>Hello, I'm Mohammed Alom</h4>
            <hr />
            <p>
              Software Engineer | Open Sourcerer | Web Dev | AI-ML Enthusiast
            </p>

            <div className="social-links">
              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/mjalom-chowdhury/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a
                href="https://github.com/mjachowdhury"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* Freecodecamp */}
              <a
                href="https://www.freecodecamp.org/fcc5e090962-ae6c-4cb2-bb01-48aee075299b"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-free-code-camp" aria-hidden="true" />
              </a>
              {/* Youtube */}
              <a
                href="http://google.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Landing;
