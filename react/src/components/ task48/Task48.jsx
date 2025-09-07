// 48) Fetch API + useEffect: вивести список користувачів з JSONPlaceholder.
import React, { useEffect, useState } from "react";

const Task48 = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Error fetching");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Task 48</h1>
      {loading && <p>Loading....</p>}
      {error !== null && <p>There is error: {error}</p>}
      {users.map((user) => (
        <p key={user.id}>
          Name: {user.name} Email: {user.email}
        </p>
      ))}
    </div>
  );
};

export default Task48;
