import React from "react";
import Nav from "./Navigation/Nav";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const url =
    "https://mir-s3-cdn-cf.behance.net/project_modules/fs/8e363755412931.598334711828f.gif";

  return (
    <>
      <Nav />

      <div className="container header d-flex align-items-center">
        <div className="row">
          <div className="col-lg col-md col-sm align-items-start left_header mt-5">
            <h1>
              Grow Your Business with <br />
              <span className="text-danger border-bottom p-lg-1">
                Our Service
              </span>
            </h1>
            <p className="p-2">
              Our team very talented making websites and applications.
            </p>
            <button
              className="btn btn-outline-primary btn-lg p-2 rounded-pill"
              onClick={() => history.push("/service")}
            >
              Service
            </button>
          </div>

          <div className="col-lg col-md col-sm">
            <img className="img-fluid img" src={url} alt="Service" />
          </div>
        </div>
      </div>
      <p className="text-muted">@Sonu Shamra 2020</p>
    </>
  );
};

export default Home;
