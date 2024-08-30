import "../styles/home.css";
import Home_img from "../assets/images/Home_BG.jpg";
import Profile from "../assets/images/WhatsApp_Image_2024-02-03_at_4.37.19_PM-removebg-preview.png";
import Button from "@mui/material/Button";
import { MDBIcon } from "mdb-react-ui-kit";
const Home = () => {
  const links = [
    {
      github: "https://github.com/Naeem2664",
      linkedin: "https://www.linkedin.com/in/muhammad-naeem-6b6b7b1a4/",
    },
  ];
  return (
    <>
      <div
        className="container-fluid img-fluid w-100 background-image"
        style={{
          height: "100vh",
          backgroundImage: `linear-gradient(90deg, rgba(2,0,36,0.7161458333333333) 66%, rgba(9,9,121,0.506061799719888) 98%, rgba(255,0,123,0.029871323529411797)),url(${Home_img})`,
        }}
      >
        <div className="row">
          <div className="col home-section">
            <div
              className="col-lg-12 col-xxl-12 d-flex justify-content-center align-items-center profile-pic"
              style={{ width: "100vw", borderRadius: "10px" }}
            >
              <img
                src={Profile}
                className="border border-primary rounded-circle profile-image"
                alt="image"
              />
            </div>
            <div className="col-lg-12 ">
              <div className="col-lg-12 mt-5">
                <div class="main">
                  <h2>
                    Hi, i'm Muhammad Naeem
                    <div className="roller">
                      <span id="rolltext">
                        Software Engineer
                        <br />
                        Full Stack Web Developer
                        <br />
                        Open Source Contributor
                        <br />
                      </span>
                    </div>
                  </h2>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-6 col-md-6 col-lg-12 col-xxl-12 d-flex justify-content-center align-items-center m-2">
                  <a href="https://github.com/Naeem2664">
                    <Button variant="outlined" className="button m-1">
                      <MDBIcon fab icon="github" />
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/muhammad-naeem-1b2b33219">
                    <Button variant="outlined" className="button m-1">
                      <MDBIcon fab icon="linkedin-in" />
                    </Button>
                  </a>
                  <a href="https://github.com/naeem3">
                    <Button variant="outlined" className="button m-1">
                      <MDBIcon fab icon="facebook-f" />
                    </Button>
                  </a>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-12 col-xxl-12 d-flex justify-content-center align-items-center m-2">
                  <a href="https://github.com/naeem3">
                    <Button variant="outlined" className="button m-1">
                      <MDBIcon fab icon="twitter" />
                    </Button>
                  </a>
                  <a href="https://github.com/naeem3">
                    <Button variant="outlined" className="button m-1">
                      <MDBIcon fab icon="instagram" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
