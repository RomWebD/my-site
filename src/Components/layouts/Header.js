import React, { Component } from "react";
import {
  Button,
  Container,
  FormControl,
  Nav,
  Navbar,
  Form,
} from "react-bootstrap";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          fixed="ontop"
          collapseOnSelect
          expand="lg"
          variant="light"
          class="container br-25"
          className="header"
          height="10px"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="60"
                className="d-inline-block align-top"
                alt="Logo"
              />{" "}
              Сайт будівельних робіт
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="stanbottom mr-auto">
                <Nav.Link href="/">
                  Домашня сторінка&nbsp;<i class="fas fa-home"></i>
                </Nav.Link>
              </Nav>
              <Nav className="stanbottom mr-auto">
                <Nav.Link href="/price">Ціни</Nav.Link>
              </Nav>
              <Nav className="stanbottom mr-auto">
                <Nav.Link href="/contacts">Контакти</Nav.Link>
                <Nav.Link href="/not-found-page"></Nav.Link>
              </Nav>

              <Form inline >
                <i class="fas fa-search mr-3" aria-hidden="true" />

                <input type="text" placeholder=" Введіть текст" className="search_button"/>

                <Button
                  style={{ background: "rgba(0,0,0,0.8)", color: "white", margin:"0 auto", marginTop:"2px" }}
                >
                  Пошук
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
