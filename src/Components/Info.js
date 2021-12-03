import React, { Component } from "react";
import { InfoConsumer } from "./context";
import { Link } from "react-router-dom";
class Info extends Component {
  render() {
    const { id, headerTitle, headerText, img } = this.props.item;

    return (
      <InfoConsumer>
        {value => (
          <div className="col-10 col-lg-4 mx-auto mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img src={img} alt={headerTitle} className="card-image-top" />
              <div className="card-body">
                <h4 className="card-title text-uppercase">{headerTitle}</h4>
                <p className="card-text">{headerText}</p>
                <Link
                  onClick={() => value.handleDetail(id)}
                  to="/aboutus"
                  className="btn btn-outline-primary text-uppercase"
                >
                  Детальніше
                </Link>
              </div>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}
export default Info;
