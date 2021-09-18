import React from "react";
import { useState, useEffect } from "react";
import "./Users.css";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://611f264e9771bf001785c73e.mockapi.io//users"
      );
      const users = await res.json();
      //console.log(users);
      setUsers(users);
    };
    fetchData();
  }, []);
  let mystyle = { textDecoration: "none" };
  return (
    <div className="Users">
      {users.map((user) => {
        return (
          <Link style={mystyle} to={`/user/${user.id}`}>
            <h3 key={user.id}> {user.name}</h3>
          </Link>
        );
      })}
    </div>
  );
}

export default Users;
