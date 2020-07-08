import React, { useState } from "react";
import Nav from "./Navigation/Nav";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    handleInput();
    setUser({
      name: "",
      email: "",
      message: ""
    });
    alert(`Your Name is ; ${user.name} and Email is : ${user.email}`);
  };

  const handleInput = name => e => {
    setUser({
      ...user,
      [name]: e.target.value
    });
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 mt-5">
            <div className=" border p-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-primary">Name:</label>
                  <input
                    autoComplete="off"
                    name="name"
                    value={user.name}
                    type="text"
                    onChange={handleInput("name")}
                    className="form-control"
                    placeholder="You Name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-primary">Email:</label>
                  <input
                    type="email"
                    autoComplete="off"
                    value={user.email}
                    name="email"
                    onChange={handleInput("email")}
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-primary">Message:</label>
                  <textarea
                    type="text"
                    autoComplete="off"
                    value={user.message}
                    name="message"
                    onChange={handleInput("message")}
                    className="form-control"
                    placeholder="Your Message"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <p className="text-muted my-5">@Sonu Shamra 2020</p>
      </div>
    </>
  );
};

export default Contact;
