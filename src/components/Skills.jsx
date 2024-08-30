import "../styles/skills.css";
import { MDBProgressBar } from "mdb-react-ui-kit";
import { MDBProgress } from "mdb-react-ui-kit";
import { ProgressBar } from "react-bootstrap";
const About = () => {
  return (
    <>
      <div className="container about">
        <div className="row">
          <div className="d-flex justify-content-center align-items-center">
            <h6 className="text-primary">My Skills</h6>
          </div>
          <div className="col d-flex justify-content-center align-items-center">
            <h2 className=" mt-2">
              what I know?
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="skill">
              <div className="label">
                <label>HTML</label>
                <p className="percentage fst-italic">95%</p>
              </div>
              <div>
                <MDBProgress>
                  <MDBProgressBar
                    width="95"
                    bgColor="danger"
                    valuemin={0}
                    valuemax={100}
                  ></MDBProgressBar>
                </MDBProgress>
              </div>
            </div>
            <div className="skill">
              <div className="label">
                <label>CSS</label>
                <p className="percentage fst-italic">71%</p>
              </div>
              <div>
                <MDBProgress>
                  <MDBProgressBar
                    width="71"
                    bgColor="info"
                    valuemin={0}
                    valuemax={100}
                  ></MDBProgressBar>
                </MDBProgress>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="skill">
              <div className="label">
                <label>JavaScript</label>
                <p className="percentage fst-italic">69%</p>
              </div>
              <div>
                <MDBProgress>
                  <MDBProgressBar
                    width="69"
                    bgColor="secondary"
                    valuemin={0}
                    valuemax={100}
                  ></MDBProgressBar>
                </MDBProgress>
              </div>
            </div>
            <div className="skill">
              <div className="label">
                <label>React.js</label>
                <p className="percentage fst-italic">80%</p>
              </div>
              <div>
                <MDBProgress>
                  <MDBProgressBar
                    width="80"
                    bgColor="primary"
                    valuemin={0}
                    valuemax={100}
                  ></MDBProgressBar>
                </MDBProgress>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="skill">
              <div className="label">
                <label>Node.js/Express.js</label>
                <p className="percentage fst-italic">60%</p>
              </div>
              <div>
                <MDBProgress>
                  <MDBProgressBar
                    width="60"
                    bgColor="dark"
                    valuemin={0}
                    valuemax={100}
                  ></MDBProgressBar>
                </MDBProgress>
              </div>
            </div>
            <div className="skill">
              <div className="label">
                <label>MongoDB</label>
                <p className="percentage fst-italic">90%</p>
              </div>
              <div>
                <MDBProgress>
                  <MDBProgressBar
                    width="90"
                    bgColor="success"
                    valuemin={0}
                    valuemax={100}
                  ></MDBProgressBar>
                </MDBProgress>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center mt-5">
            <h6 className="text-primary">My Certificates</h6>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <h2 className=" mt-2 mb-2">
              What I earned?
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2 mt-2">
            <div className="card bglight">
              <div className="certificate-container">
                <div className="cert-date">
                  <h6 className="fst-italic">2018-2022</h6>
                </div>
                <div className="cert-title">
                  <h4>React Basics, Udemy</h4>
                </div>
                <div className="cert-description">
                  <p className="text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, corporis. Repudiandae explicabo quis soluta accusamus
                    possimus totam corporis aspernatur porro.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2 mt-2">
            <div className="card bg-light">
              <div className="certificate-container">
                <div className="cert-date">
                  <h6 className="fst-italic">2018-2022</h6>
                </div>
                <div className="cert-title">
                  <h4>React Basics, Udemy</h4>
                </div>
                <div className="cert-description">
                  <p className="text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, corporis. Repudiandae explicabo quis soluta accusamus
                    possimus totam corporis aspernatur porro.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 mb-2 mt-2">
            <div className="card bg-light">
              <div className="certificate-container">
                <div className="cert-date">
                  <h6 className="fst-italic">2018-2022</h6>
                </div>
                <div className="cert-title">
                  <h4>React Basics, Udemy</h4>
                </div>
                <div className="cert-description">
                  <p className="text-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, corporis. Repudiandae explicabo quis soluta accusamus
                    possimus totam corporis aspernatur porro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
