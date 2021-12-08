import React, { Component } from "react";
import { Button, Container, Nav, Navbar, Form } from "react-bootstrap";
import logo from "../../logo.svg";
export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          fixed="ontop"
          collapseOnSelect
          expand="lg"
          variant="light"
          className="header"
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
              Виконання всіх будівельних робів
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="stanbottom mr-auto">
                <Nav.Link href="/">
                  Домашня сторінка&nbsp;<i className="fas fa-home"></i>
                </Nav.Link>
              </Nav>
              <Nav className="stanbottom mr-auto">
                <Nav.Link href="/price">Ціни</Nav.Link>
              </Nav>
              <Nav className="stanbottom mr-auto">
                <Nav.Link href="/contacts">Контакти</Nav.Link>
                <Nav.Link href="/not-found-page"></Nav.Link>
              </Nav>

              <Form inline>
                <i className="fas fa-search mr-3" aria-hidden="true" />

                <input
                  type="text"
                  placeholder=" Введіть текст"
                  className="search_button"
                />

                <Button
                  style={{
                    background: "rgba(0,0,0,0.8)",
                    color: "white",
                    margin: "0 auto",
                    marginTop: "2px",
                  }}
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
