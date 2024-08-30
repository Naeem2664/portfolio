import "../styles/about.css";
import { MDBProgressBar } from "mdb-react-ui-kit";
import { MDBProgress } from "mdb-react-ui-kit";
import { ProgressBar } from "react-bootstrap";
const About = () => {
  return (
    <>
      <div className="container about">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <h6 className="text-primary">About Me</h6>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <h2 className=" mt-2">
              Welcome to my Site!
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <p className="text-center intro-para font-weight-bold">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              molestiae illo corporis sed rerum excepturi dolore laudantium
              accusantium dignissimos porro aperiam eveniet voluptatem debitis
              possimus, laboriosam vitae? Incidunt obcaecati cupiditate veniam
              ea dicta rerum aspernatur quasi quis quae ratione, blanditiis,
              nemo, ipsa reprehenderit assumenda vitae cumque. Repudiandae
              ducimus et incidunt quisquam dicta dolore quae quia, impedit
              alias, illo nostrum explicabo laborum? Repellat dolor iste,
              aliquid aperiam laborum blanditiis! Repellat tempora ipsam,
              accusantium iure quisquam voluptatibus dolores reiciendis corrupti
              reprehenderit dolor ipsa rem hic quam maiores a fugit asperiores
              consequatur, dolorum ullam quae enim corporis delectus nisi
              consequuntur. Nobis, totam consectetur.
            </p>
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
                <MDBProgress height='10'>
                  <MDBProgressBar width="95" bgColor="danger" valuemin={0} valuemax={100}>
                  </MDBProgressBar>
                </MDBProgress>
              </div>
            </div>
            <div className="skill">
              <div className="label">
                <label>CSS</label>
                <p className="percentage fst-italic">71%</p>
              </div>
              <div>
                <MDBProgress height='10'>
                  <MDBProgressBar width="71" bgColor="info" valuemin={0} valuemax={100}>
                  </MDBProgressBar>
                </MDBProgress>
              </div>
            </div>
          </div>

        <div className="col-lg-4">
            <div className="skill">
              <div className="label">
                <label>JavaScript</label>
                <p className="percentage fst-italic" >69%</p>
              </div>
              <div>
                <MDBProgress height='10'>
                  <MDBProgressBar width="69" bgColor="secondary" valuemin={0} valuemax={100}>
                  </MDBProgressBar>
                </MDBProgress>
              </div>
            </div>
            <div className="skill">
              <div className="label">
                <label>React.js</label>
                <p className="percentage fst-italic">80%</p>
              </div>
              <div>
                <MDBProgress height='10'> 
                  <MDBProgressBar width="80" bgColor="primary" valuemin={0} valuemax={100}>
                  </MDBProgressBar>
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
                <MDBProgress height='10'>
                  <MDBProgressBar width="60" bgColor="dark" valuemin={0} valuemax={100}>
                  </MDBProgressBar>
                </MDBProgress>
              </div>
            </div>
            <div className="skill">
              <div className="label">
                <label>MongoDB</label>
                <p className="percentage fst-italic">90%</p>
              </div>
              <div>
                <MDBProgress height='10'>
                  <MDBProgressBar width="90" bgColor="success" valuemin={0} valuemax={100}>
                  </MDBProgressBar>
                </MDBProgress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
