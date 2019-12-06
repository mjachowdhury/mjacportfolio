import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* 1st project*/}
          <Card shadow={5} style={{ mimWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcmIlD6X7zYLDlkL1CQMKQI1MfDQpl4YHiSbAAVO5ifTum1Vh&s) center / cover"
              }}
            >
              {/*React Project #1*/}
            </CardTitle>
            <CardText>React Project #1 - Personal Protfolio</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/mjachowdhury/myPortfolio">Github</a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* 2nd project*/}
          <Card shadow={5} style={{ mimWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-fLhCl5J8VE9xRzn5WaKa_dTyYOV6vU9u229RzjwccHQNWEo&s) center / cover"
              }}
            >
              {/* React Project #2 */}
            </CardTitle>
            <CardText>
              React Project #2 - Will start very soon another React project.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* 3rd project*/}
          <Card shadow={5} style={{ mimWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcmIlD6X7zYLDlkL1CQMKQI1MfDQpl4YHiSbAAVO5ifTum1Vh&s) center / cover"
              }}
            >
              {/* React Project #3*/}
            </CardTitle>
            <CardText>
              React Project #3 - Will start very soon another React project.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* 1st project*/}
          <Card shadow={5} style={{ mimWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCc1RuqyxpVl5drSjmehYU94b7lA0KD8IKN99yINATn-kGx1as&s) center / cover"
              }}
            >
              {/*Angular Project #1*/}
            </CardTitle>
            <CardText>Angular Project #1 - Exhivision Website</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/mjachowdhury/myPortfolio">Github</a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* 2nd project*/}
          <Card shadow={5} style={{ mimWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ08kJ77S5fZJQDJyjs6rgSQqFszjq6tyt31ui_-QXbU4W3ZpQV&s) center / cover"
              }}
            >
              {/*Angular Project #2*/}
            </CardTitle>
            <CardText>
              Angular Project #2 - Will start very soon another Angular project.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* 3rd project*/}
          <Card shadow={5} style={{ mimWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmJqfQENKuNadc6EkQHjb_beAzFGwii3WMCr_7p70nELSf0Oj&s) center / cover"
              }}
            >
              {/*Angular Project #3*/}
            </CardTitle>
            <CardText>
              Angular Project #3 - Will start very soon another Angular project.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* 1st project java*/}
          <Card shadow={5} style={{ mimWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR94Ym3dWKOXjaXgo0inBV0jD3TDGZSSpagtLaTIDPBTLvCG0wG&s) center / cover"
              }}
            >
              {/* Java Project #1*/}
            </CardTitle>
            <CardText>
              Java Project #1 - Group Project 3rd Year Transport AI
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/mjachowdhury/GPAPP">Github</a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* 2nd project*/}
          <Card shadow={5} style={{ mimWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbgqTM6GrtV1WVSg55C60KQzi8ZlTf6JdLnj6elrFYVcRDnS8C&s) center / cover"
              }}
            >
              {/*Java Project #2*/}
            </CardTitle>
            <CardText>
              Java Project #2 - Project Based on Java DistributedSystem.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/mjachowdhury/college-projects/tree/master/DistributedSystem">
                  Github
                </a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* 3rd project*/}
          <Card shadow={5} style={{ mimWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0t_xEcSdfibFrWjzTuIKg-aRes4ThZ-lwFxa07YTlAPEVvEXR&s) center / cover"
              }}
            >
              {/*Java Project #3*/}
            </CardTitle>
            <CardText>
              Java Project #3 - Java project on Dentist Appointment System.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/mjachowdhury/college-projects/tree/master/Object%20Oriented%20Programming/CITDentistProject/CITDentistProject">
                  Github
                </a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* 1st project*/}
          <Card shadow={5} style={{ mimWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjts7JFwbJF1dDoZNHIB0yoaEGlO6obsZVn6wtD9BvV4aQPAC&s) center / cover"
              }}
            >
              {/*Spring Project #1*/}
            </CardTitle>
            <CardText>Spring Project #1 - Contact Web App</CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/mjachowdhury/ContactWebAppSpring">
                  Github
                </a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* 2nd project*/}
          <Card shadow={5} style={{ mimWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYgnmONzmjkOfkijcL5wRaBRgbcvpKVQPVRnMAo0Uvxur9rmT&s) center / cover"
              }}
            >
              {/*Spring Project #2*/}
            </CardTitle>
            <CardText>
              Spring Project #2 - Spring Legacy Banking Application Console
              based
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/mjachowdhury/SpringWork/tree/master/BankingApplication">
                  Github
                </a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* 3rd project*/}
          <Card shadow={5} style={{ mimWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDGmFUbKJ9wCFhAl8SqjbZ4k7ZYoCqtr2zr2caVd_U9KGep_AM&s) center / cover"
              }}
            >
              {/*Spring Project #3*/}
            </CardTitle>
            <CardText>
              Spring Project #3 - Spring Boot Job Bidding Web Application with
              REST API Consume.
            </CardText>
            <CardActions border>
              <Button colored>
                <a href="https://github.com/mjachowdhury/SpringWork/tree/master/JobBiding">
                  Github
                </a>
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Angular</Tab>
          <Tab>Java</Tab>
          <Tab>SpringBoot</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
