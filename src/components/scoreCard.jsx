import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "./common/navBar";

class ScoreCard extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar username={this.props.location.state.username} />
        <div className="card m-3">
          <center>
            <h5
              style={{ backgroundColor: "#ffc107" }}
              className="col col-12 card-header"
            >
              <b>Score Card</b>
            </h5>
          </center>
          <div
            className="col col-12 card-body"
            style={{ padding: 0, display: "flex" }}
          >
            <table
              className="col col-6 table table-dark"
              style={{ marginBottom: 0 }}
            >
              <thead>
                <tr>
                  <th scope="col" style={{ color: "yellow" }}>
                    Your Answers
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.props.location.state.options.map(o => (
                  <tr key={o.id}>
                    <td>
                      <b>
                        {o.id} - {o.answer}
                      </b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table
              className="col col-6 table table-dark"
              style={{ marginBottom: 0 }}
            >
              <thead>
                <tr>
                  <th scope="col" style={{ color: "yellow" }}>
                    Correct Answers
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.props.location.state.filteredResult.map(r => (
                  <tr key={r.id}>
                    <td>
                      <b>
                        {r.id} - {r.answer}
                      </b>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card-footer bg-info border-success">
            <center>
              <b style={{ color: "white" }}>
                Total: {this.props.location.state.result.length}
              </b>
            </center>
          </div>
        </div>

        <center>
          <Link to="/" className="btn btn-success ml-3">
            Go Home
          </Link>
        </center>
      </React.Fragment>
    );
  }
}

export default ScoreCard;
