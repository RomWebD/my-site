/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import { InfoConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";
class AboutUs extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          const { id, headerTitle, headerText, title, description, img, maps } =
            data.detailInfo;

          return (
            <React.Fragment>
              <style>{"body { background-color: #F6F4E8}"}</style>
              <HeaderDetails>
                <h1 className="display-4 font-weight-bold">{headerTitle}</h1>
                <p>{headerText}</p>
                {/* Social Icons */}
                <div className="icon mt-5">
                  <div className="row justify-content-center">
                    <div className="col-2">
                      <a
                        href="https://www.facebook.com/profile.php?id=100009304363626"
                        target="_blank"
                        rel=" noreferrer"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </div>
                    <div className="col-2">
                      <i className="fab fa-twitter" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-google-plus-g" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-facebook-messenger" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-viber" />
                    </div>
                    <div>
                      <div className="col-2">
                        <a
                          href="https://www.instagram.com/roman_0__/"
                          target="_blank"
                          rel=" noreferrer"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </HeaderDetails>
              {/* Nav Link */}
              <Tab.Container defaultActiveKey="aboutPlace">
                <ul className="nav  justify-content-center">
                  <li>
                    <Nav.Item>
                      <Nav.Link eventKey="aboutPlace">
                        <a id="link" className="nav-link" href="#aboutPlace">
                          About Place
                        </a>
                      </Nav.Link>
                    </Nav.Item>
                  </li>
                  <li>
                    <Nav.Item>
                      <Nav.Link eventKey="reviews">
                        <a
                          id="link"
                          href="#reviews"
                          className="nav-link active"
                          data-toggle="tab"
                        >
                          Reviews
                        </a>
                      </Nav.Link>
                    </Nav.Item>
                  </li>

                  <li>
                    <Nav.Item>
                      <Nav.Link eventKey="map">
                        <a id="link" href="#map" className="nav-link active">
                          Map
                        </a>
                      </Nav.Link>
                    </Nav.Item>
                  </li>
                </ul>
                {/* About Place Tab*/}

                <Tab.Content className="tab-content text-center mb-5">
                  <Tab.Pane
                    className="tab-pane text-center mt-5"
                    eventKey="aboutPlace"
                    role="tabpanel"
                  >
                    <h2 className="mb-3">{title}</h2>
                    <p>{description}</p>
                    <img
                      src={img}
                      alt={title}
                      className="img-thumbnail img-fluid"
                    />
                  </Tab.Pane>

                  <Tab.Pane
                    className="tab-pane mt-5"
                    eventKey="reviews"
                    role="tabpanel"
                  >
                    <img
                      src={img}
                      alt={title}
                      className="img-thumbnail img-fluid"
                    />
                  </Tab.Pane>
                  <Tab.Pane
                    className="tab-pane mt-5"
                    eventKey="map"
                    role="tabpanel"
                  >
                    <iframe
                      src={maps}
                      style={{
                        border: "0",
                        height: "28.125rem",
                        width: "100%",
                        frameborder: "0",
                      }}
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default AboutUs;

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  height: 32vh;
  text-transfrom: uppercase;
  color: var(--mainDark);
  text-align: center;
  h1 {
    padding-top: 1%;
    color: var(--mainWhite);
  }

  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 2%;
    color: var(--mainDark);
  }

  i {
    font-size: 1.875rem;
    color: var(--mainDark);
  }
  i:hover {
    color: var(--mainLight);
    cursor: pointer;
  }

  @media (max-width: 860px) {
    h1,
    h4 {
      font-size:35px;
    }

    @media (max-width: 560px) {
      h1,
      h4 {
        font-size:22px;
        padding-top:20px
      }
`;
