/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
class Contacts extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Наше місцезнаходження</strong>
            </h3>
          </div>
          <div className="row">
            <div className="col-md-7">
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1ZdPW4DUKzlN-XalZbLoFaWb3nAdBDQfk"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0",
                }}
                allowFullScreen
              />
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Залиште свої дані </strong>
              </h4>
              <form>
                <Form.Control className="mb-2" type="text" placeholder="Ім'я" />
                <Form.Control
                  className="mb-2"
                  type="email"
                  placeholder="Електронна пошта"
                />

                <Form.Control
                  className="mb-2"
                  type="tel"
                  placeholder="Номер телефону"
                />
                <textarea
                  className="form-control"
                  cols="30"
                  rows="3"
                  placeholder="Ваше запитання"
                />
                <Link to="#" className="btn btn-outline-primary text-uppercase mt-1">
                 
                  <i className="fab fa-telegram-plane" />
                  &nbsp;Відправити
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contacts;
