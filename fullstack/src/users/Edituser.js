import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams();
  console.log("id", id);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission
    await axios.put(`http://localhost:8080/updateuser/${id}`, user);
    navigate("/"); // Use the navigate function to redirect
  };

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/userbyid/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e) => onSubmit()}>
            <div>
              <label className="form-label" htmlFor="Name">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <div>
              <label className="form-label" htmlFor="Name">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <div>
              <label className="form-label" htmlFor="Name">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                value={email}
                name="email"
                onChange={(e) => onInputChange(e)}
              ></input>
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link to="/" type="submit" className="btn btn-danger mx-2">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
