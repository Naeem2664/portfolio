import React from "react";
import "../styles/dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBProgressBar, MDBIcon, MDBProgress } from "mdb-react-ui-kit";

function App() {
  return (
    <div>
      <section class="bg-light">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 mb-4 mb-sm-5">
              <div class="card card-style1 border-0">
                <div class="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                  <div class="row align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                        alt="..."
                      />
                    </div>
                    <div class="col-lg-6 px-xl-10">
                      <div class="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                        <h3 class="h2 text-white mb-0">Muhammad Naeem</h3>
                        <span class="text-white">MERN Stack Developer</span>
                      </div>
                      <ul class="list-unstyled mb-1-9">
                        <li class="mb-2 mb-xl-3 display-28">
                          <span class="display-26 text-secondary me-2 font-weight-600">
                            Position:
                          </span>{" "}
                          Web Developer
                        </li>
                        <li class="mb-2 mb-xl-3 display-28">
                          <span class="display-26 text-secondary me-2 font-weight-600">
                            Experience:
                          </span>{" "}
                          4 Years
                        </li>
                        <li class="mb-2 mb-xl-3 display-28">
                          <span class="display-26 text-secondary me-2 font-weight-600">
                            Email:
                          </span>{" "}
                          edith@mail.com
                        </li>
                        <li class="mb-2 mb-xl-3 display-28">
                          <span class="display-26 text-secondary me-2 font-weight-600">
                            Address:
                          </span>{" "}
                          Sadiqabad
                        </li>
                        <li class="display-28">
                          <span class="display-26 text-secondary me-2 font-weight-600">
                            Phone:
                          </span>{" "}
                          +92 - 303 - 2664863
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 mb-4 mb-sm-5">
              <div>
                <span class="section-title text-dark mt-2 mb-3 mb-sm-4">
                  About Me
                </span>
                <p>
                  Edith is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </p>
                <p class="mb-0">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed.
                </p>
              </div>
            </div>
            <div class="col-lg-12">
              <div class="row">
                <div class="col-lg-12 mb-4 mb-sm-5">
                  <div className="col">
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
                  <div className="col">
                    <div className="skill">
                      <div className="label">
                        <label>JavaScript</label>
                        <p className="percentage fst-italic">75%</p>
                      </div>
                      <div>
                        <MDBProgress>
                          <MDBProgressBar
                            width="75"
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
                        <p className="percentage fst-italic">81%</p>
                      </div>
                      <div>
                        <MDBProgress>
                          <MDBProgressBar
                            width="81"
                            bgColor="primary"
                            valuemin={0}
                            valuemax={100}
                          ></MDBProgressBar>
                        </MDBProgress>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="skill">
                      <div className="label">
                        <label>Node.js</label>
                        <p className="percentage fst-italic">80%</p>
                      </div>
                      <div>
                        <MDBProgress>
                          <MDBProgressBar
                            width="80"
                            bgColor="success"
                            valuemin={0}
                            valuemax={100}
                          ></MDBProgressBar>
                        </MDBProgress>
                      </div>
                    </div>
                    <div className="skill">
                      <div className="label">
                        <label>MongoDB</label>
                        <p className="percentage fst-italic">91%</p>
                      </div>
                      <div>
                        <MDBProgress>
                          <MDBProgressBar
                            width="91"
                            bgColor="success"
                            valuemin={0}
                            valuemax={100}
                          ></MDBProgressBar>
                        </MDBProgress>
                      </div>
                    </div>
                  </div>
                  <div>
                  <span class="section-title text-dark mt-5 mb-3 mb-sm-4">
                  Education
                </span>
                    <p>
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy.
                    </p>
                    <p class="mb-1-9">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
