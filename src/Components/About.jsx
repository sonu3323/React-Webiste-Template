import React from "react";
import Nav from "./Navigation/Nav";
import { useHistory } from "react-router-dom";

const About = ({ header, para }) => {
  const history = useHistory();

  const url =
    "https://cdn.dribbble.com/users/1015635/screenshots/5167116/new.gif";

  return (
    <>
      <Nav />

      <div className="container header d-flex align-items-center">
        <div className="row">
          <div className="col-lg col-md col-sm align-items-start left_header mt-5">
            <h1>
              {header}
              <br />
              <span className="text-danger border-bottom p-lg-1">
                {" "}
                Be Happy
              </span>
            </h1>
            <p className="p-2">{para}.</p>
            <button
              className="btn btn-outline-primary btn-lg p-2 rounded-pill"
              onClick={() => history.push("/")}
            >
              Home
            </button>
          </div>

          <div className="col-lg col-md col-sm">
            <img className="img-fluid img" src={url} alt="Service-pic" />
          </div>
        </div>
      </div>
      <p className="text-muted">@Sonu Shamra 2020</p>
    </>
  );
};
export default About;
