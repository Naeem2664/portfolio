import React from "react";
import Slider from "react-slick";
import "../styles/services.css";
import bg from "../assets/images/nature-tranquil-beauty-reflected-calm-water-generative-ai.jpg";
import { MdOutlineWeb } from "react-icons/md";
import { FaWordpressSimple } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";


function Services() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      className="slider-container container-fluid service-container "
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="row service-header-container">
        <div className="row mt-2">
          <div className="col d-flex justify-content-center align-items-center">
            <h6 className="text-primary">Services</h6>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center">
            <h2 className="">I'm Available for Hire!</h2>
          </div>
        </div>
      </div>

      <div className="row services">
        <div className="col ">
          <Slider {...settings}>
            <div className="service">
              <div className="inner-service-section">
                <div className="service-icon">
                  <h1 className="text-center m-2">
                    <MdOutlineWeb />
                  </h1>
                </div>
                <div className="service-title">
                  <h2 className="text-center ">Full Stack Web Development</h2>
                </div>
                <div className="service-description">
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Corporis beatae deserunt dolor eveniet eum
                    quos temporibus dolorem minus velit vero, aspernatur
                    exercitationem. Alias nisi odit praesentium exercitationem,
                    modi molestias provident.
                  </p>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="inner-service-section">
                <div className="service-icon">
                  <h1 className="text-center m-2">
                    <FaWordpressSimple />
                  </h1>
                </div>
                <div className="service-title">
                  <h2 className="text-center ">WordPress Development</h2>
                </div>
                <div className="service-description">
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Corporis beatae deserunt dolor eveniet eum
                    quos temporibus dolorem minus velit vero, aspernatur
                    exercitationem. Alias nisi odit praesentium exercitationem,
                    modi molestias provident.
                  </p>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="inner-service-section">
                <div className="service-icon">
                  <h1 className="text-center m-2">
                    <CiMobile3/>
                  </h1>
                </div>
                <div className="service-title">
                  <h2 className="text-center ">Mobile Application Development</h2>
                </div>
                <div className="service-description">
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Corporis beatae deserunt dolor eveniet eum
                    quos temporibus dolorem minus velit vero, aspernatur
                    exercitationem. Alias nisi odit praesentium exercitationem,
                    modi molestias provident.
                  </p>
                </div>
              </div>
            </div>
            <div className="service">
              <div className="inner-service-section">
                <div className="service-icon">
                  <h1 className="text-center m-2">
                    <MdOutlineWeb />
                  </h1>
                </div>
                <div className="service-title">
                  <h2 className="text-center ">Web Development</h2>
                </div>
                <div className="service-description">
                  <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Corporis beatae deserunt dolor eveniet eum
                    quos temporibus dolorem minus velit vero, aspernatur
                    exercitationem. Alias nisi odit praesentium exercitationem,
                    modi molestias provident.
                  </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Services;
