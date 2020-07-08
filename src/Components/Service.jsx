import React from "react";
import Nav from "./Navigation/Nav";
import { data } from "./Navigation/CardData";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <>
      <Nav />
      <h1 className="my-5 display-4 text-danger">Our Service</h1>

      <div className="container my-3">
        <div className="row">
          {data.map((card, index) => {
            return (
              <div className="col-md-4 my-3">
                <div class="card shadow-lg bg-light">
                  <img src={card.img} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title text-uppercase text-primary">
                      {card.card_title}
                    </h5>
                    <hr />
                    <p class="card-text">{card.card_para}</p>
                    <NavLink to="/" class="btn btn-primary">
                      {card.back_button}
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-muted">@Sonu Shamra 2020</p>
      </div>
    </>
  );
};

export default Service;
