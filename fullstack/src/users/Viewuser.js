import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

function Viewuser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();
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
          <h2 className="text-center m-4">User Details</h2>
          <div className="card">
            <div className="card-header">
              User id:
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name : </b>
                  <b>{user.name}</b>
                </li>
                <li className="list-group-item">
                  <b>User Name :</b>
                  <b>{user.username}</b>
                </li>
                <li className="list-group-item">
                  <b>Email :</b>
                  <b>{user.email}</b>
                </li>
              </ul>
            </div>
          </div>

          <Link className="btn btn-primary" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Viewuser;
