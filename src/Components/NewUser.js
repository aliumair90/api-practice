import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Newuser = () => {
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
    },
    zipcode: "",
    terms: false,
  });

  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", values)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">New User Form</h5>
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={(e) =>
                      setValues({ ...values, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <div className="row g-3">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        name="street"
                        onChange={(e) =>
                          setValues({
                            ...values,
                            address: {
                              ...values.address,
                              street: e.target.value,
                            },
                          })
                        }
                        placeholder="Street"
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        name="suite"
                        onChange={(e) =>
                          setValues({
                            ...values,
                            address: {
                              ...values.address,
                              suite: e.target.value,
                            },
                          })
                        }
                        placeholder="Suite"
                        required
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        onChange={(e) =>
                          setValues({
                            ...values,
                            address: {
                              ...values.address,
                              city: e.target.value,
                            },
                          })
                        }
                        placeholder="City"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="zipcode" className="form-label">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipcode"
                    name="zipcode"
                    onChange={(e) =>
                      setValues({ ...values, zipcode: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-3 form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                    name="terms"
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>

                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary me-2">
                    Submit
                  </button>
                  <Link to="/" className="btn btn-secondary">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newuser;
