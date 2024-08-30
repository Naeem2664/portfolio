import React from "react";
import "../styles/contact.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import { MDBInput, MDBTextArea, MDBBtn } from "mdb-react-ui-kit";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container">
      <div className="row contact-container">
        <div className="col-md-12 col-lg-12 col-xxl-12">
          <div className="row">
            <div className="col-md-12 col-lg-12 col-xxl-12">
              <div className="title text-center">
                <h6>Have a question?</h6>
              </div>
            </div>
            <div className="col-md-12 col-lg-12 col-xxl-12">
              <div className="title-text mt-2">
                <h2 className="text-dark text-center">Get in touch</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-12 col-xxl-12">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xxl-6">
              <div className="contact-form">
                <form>
                  <div className="mb-3">
                    <MDBInput
                      label="Your Name"
                      id="name"
                      type="text"
                      size="lg"
                    />
                  </div>
                  <div className="mb-3">
                    <MDBInput
                      label="Your Email"
                      id="email"
                      type="email"
                      size="lg"
                    />
                  </div>
                  <div className="mb-3">
                    <MDBInput
                      label="Your Phone"
                      id="phone"
                      type="tel"
                      size="lg"
                    />
                  </div>
                  <div className="mb-3">
                    <MDBTextArea
                      label="Message"
                      id="textAreaExample"
                      rows="{6}"
                      size="lg"
                    />
                  </div>
                  <MDBBtn size="lg" type="submit" className="btn btn-success">
                    Send
                  </MDBBtn>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xxl-6">
              <div className="contact-details">
                <div className="details">
                  <IoLocationOutline className="icon" />
                  <p>Shalimar Square near Midway Hotel, Sadiqabad</p>
                </div>
                <div className="details">
                  <RiWhatsappLine className="icon" />
                  <p>
                    <a href="whatsapp://send?phone=+923032664863">
                      +92 303 2664863
                    </a>
                  </p>
                </div>
                <div className="details">
                  <MdOutlineEmail className="icon" />
                  <p>
                    <a href="mailto:faltooswag@gmail.com">
                      faltooswag@gmail.com
                    </a>
                  </p>
                </div>
                <div className="details">
                  <FaCloudDownloadAlt className="icon" />
                  <p>Download Resume</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col">
              <div className="google-map-code">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5753613076577!2d70.09131921270628!3d28.297501123830635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3937402ebff180e3%3A0x34f4756e8a176613!2s73XR%2B35V%2C%20Basti%2C%20Sadiqabad%2C%20Rahim%20Yar%20Khan%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721572647095!5m2!1sen!2s"
                  width="100%"
                  height="600"
                  style={{ border: "2px solid green" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
