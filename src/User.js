import React from "react";
import { useState, useEffect } from "react";
import "./User.css";

function User({ match }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchDataUser = async () => {
      const res = await fetch(
        `https://611f264e9771bf001785c73e.mockapi.io/users/${match.params.id}`
      );
      const user = await res.json();
      console.log(user);
      setUser(user);
    };
    fetchDataUser();
  }, []);
  return (
    <div className="User">
      <h2> {user.name} </h2>
      <p>
        <img src={user.avatar} alt="img" />
      </p>
      <button className="btn">Delete</button>
      <button className="btn">Edit</button>
    </div>
  );
}

export default User;
