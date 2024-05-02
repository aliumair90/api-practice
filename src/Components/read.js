import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const List = () => {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUserData(response.data);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <div className="d-flex justify-content-end mt-4 me-5">
        <Link to="/Newuser" className="btn btn-info">
          Create a New User
        </Link>
      </div>
      <Container>
        <h1 className="mt-4 mb-4">User Information</h1>
        {isError !== "" && <h2>{isError}</h2>}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Address</th>
              <th>Zip Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myData.map((data, index) => (
              <tr key={data.id}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.username}</td>
                <td>{data.email}</td>
                <td>
                  {data.address.street}, {data.address.suite},{" "}
                  {data.address.city}
                </td>
                <td>{data.address.zipcode}</td>
                <td>
                  <Link to="/" className="btn btn-primary me-2">
                    Read
                  </Link>
                  <Link
                    to={`/edit/${data.id}`}
                    className="btn btn-primary me-2"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default read;
