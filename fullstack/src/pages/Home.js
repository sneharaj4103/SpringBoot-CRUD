"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/getallusers");
    console.log(result.data);
    setUser(result.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/deleteuser/${id}`);
    loadUsers();
  };
  return (
    <div className="container">
      <div className="py-4">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewuser/${user.id}`}
                  >
                    View
                  </Link>
                  <Link
                    to={`/edituser/${user.id}`}
                    className="btn btn-outline-primary mx-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-danger mx-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
