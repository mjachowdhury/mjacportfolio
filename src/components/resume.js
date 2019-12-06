import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                className="profile-pic"
                src="public/images/profilepic.jpg"
                alt="Profile Picture"
                style={{ height: "200px" }}
              />
            </div>
            <h3 style={{ paddingTop: "2em" }}>Mohammed Chowdhury</h3>
            {/*<h4 style={{ color: "grey" }}>Full Stack Developer</h4>*/}
            <hr style={{ borderTop: "3px solid #833fb2", width: "80%" }} />
            <p>
              Software Engineer | Open Sourcerer | Web Dev | AI-ML Enthusiast
            </p>
            <p>
              Passionate about software and programming. Worked on back-end with
              Spring Boot REST Framework. Worked on Deep Learning Project using
              Tensorflow, Keras. Good base in Java, Python, SpringBoot
              Framework, SQL/MySQL .
            </p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Cork Institute of Technology</p>
            <p>Bishoptown, Cork</p>
            <h5>Phone</h5>
            <p>086 238 3449</p>
            <h5>Email</h5>
            <p>mohammed.alom@mycit.ie</p>
            <h5>Web</h5>
            <p>mohammedsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h4>Education</h4>

            <Education
              startYear={2015}
              endYear={2020}
              schoolName="Cork Institute of Technology"
              schoolDescription="BSc (Hons) Software Development - First Class Hons. expected"
            />
            <Education
              startYear={2005}
              endYear={2007}
              schoolName="Cork Institute of Technology"
              schoolDescription="Bachelor of Business & Hospitality Management-Distintion"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h4>Experience</h4>
            <Experience
              startYear={2019}
              endYear={2019}
              jobName="McAfee Software Developer Intern"
              jobDescription="It was my college placement job. Responsibility was to write and edit unit-tests to verify the integrity of the code. Write well-formatted, commented and readily-understood code using modern development practices such as Continuous Development / Continuous Integration to drive code quality. Playing a full role in the scrum process of the team."
              technology="Specific Skills & Technology used - C#, JavaScript, Web Technologies such as HTML5, CSS3 and AngularJS, CoffeeScript, SQL Server, Git, Jenkins, Windows Development environment(Visual Studiom ,Net). Windows infrastructure (Server 2012). End to End tests on Protractor Framework, Selenium, Kantu, "
            />
            <Experience
              startYear={2007}
              endYear={2015}
              jobName="Duty Manager"
              jobDescription=" "
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h4>Skills</h4>
            <Skills skill="Java" progress={80} />
            <Skills skill="Python" progress={70} />
            <Skills skill="JavaScript" progress={80} />
            <Skills skill="HTML/CSS" progress={90} />
            <Skills skill="NodeJs" progress={50} />
            <Skills skill="SQL/MySQL" progress={80} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
