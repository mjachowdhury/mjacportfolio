import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Aboutme extends Component {
  render() {
    return (
      <div>
        {/* <h1>About me Page</h1>*/}
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                className="profile-pic"
                src="images/profilepic.jpg"
                alt=""
                style={{ height: "200px" }}
              />
            </div>
            <h3 style={{ paddingTop: "2em" }}>Mohammed Chowdhury</h3>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h4>ABOUT ME</h4>
            <h6>ALLOW ME TO INTRODUCE MYSELF</h6>
            <hr style={{ borderTop: "3px solid #833fb2", width: "35%" }} />
            <p>
              I'm a Full Stack Web Developer from Cork, Ireland. I am currently
              a final year student at The Cork Institute of Technology and
              pursuing my BSc (Hons) Software Development from here. Currently
              diving deeper into Machine Learning. I believe that to be
              successful in life, one needs to be obsessive with their dreams
              and keep working towards them.
              <p></p>
              <p>
                I enjoy taking complex problems and turning them into simple and
                beautiful. I also love the logic and structure of coding and
                always strive to write elegaint and efficient code. When I'm not
                coding you will find spending time with my family.
              </p>
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Aboutme;
