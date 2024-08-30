import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import MobileApp from "../assets/images/mobile-app.jpg";
import '../styles/projects.css';
const Projects = () => {
  return (
    <div className="container-fluid">
      <div className="row projects-container">
        <div className="col-lg-12 col-xxl-12">
          <div className="row">
          <div className="title">
            <h6 className="text-dark text-center">Projects</h6>
          </div>
          </div>
          <div className="row">
          <div className="title-text">
            <h2 className="text-dark text-center">What I've Built</h2>
          </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-xxl-12">
              <div className="projects-section">
                <div className="row">
                  <div className="col-md-3 col-lg-3 col-xxl-3 mt-2 mb-2">
                    <Card sx={{ maxWidth: 370 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="220"
                          image={MobileApp}
                          alt="mobile app"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Mobile App
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Read More
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xxl-3 mt-2 mb-2">
                    <Card sx={{ maxWidth: 370 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="220"
                          image={MobileApp}
                          alt="mobile app"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Mobile App
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Read More
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xxl-3 mt-2 mb-2">
                    <Card sx={{ maxWidth: 370 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="220"
                          image={MobileApp}
                          alt="mobile app"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Mobile App
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Read More
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xxl-3 mt-2 mb-2">
                    <Card sx={{ maxWidth: 370 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="220"
                          image={MobileApp}
                          alt="mobile app"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Mobile App
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Read More
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                  <div className="col-md-3 col-lg-3 col-xxl-3 mt-2 mb-2">
                    <Card sx={{ maxWidth: 370 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="220"
                          image={MobileApp}
                          alt="mobile app"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            Mobile App
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size="small" color="primary">
                          Read More
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
