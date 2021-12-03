import React from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1*/}
            <div className="col-md-3 col-sm-6">
              <h4>Про нас</h4>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Column 2*/}
            <div className="col-md-3 col-sm-6">
              <h4>Footer in my Site</h4>
              <ul className="list-unstyled">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>

            {/* Column 3*/}
            <div className="col-md-3 col-sm-6">
              <h4>Footer in my Site</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/"> Home</a>
                </li>
                <li>
                  <a href="/price"> Price</a>
                </li>
                <li>
                  <a href="/contacts"> Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          {/* {Footer Bottom} */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Сайт будівельних робіт - Всі
              права захищені
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`


  .footer-middle {
    background: #e3e0cf;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-bottom: 0.2rem;
  }
  ul li a {
    color: var(--mainWhite);
  }
  ul li {
    font-size: 18px;
    a:hover {
      color: var(--mainLight);
    }
  }
`;
