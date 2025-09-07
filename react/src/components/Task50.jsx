import React, { useState } from "react";

const Task50 = () => {
  const initialUsers = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Charlie", age: 30 },
    { id: 3, name: "Bob", age: 22 },
  ];

  const [sortedUsers, setSortedUsers] = useState(initialUsers);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const sortByHead = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...initialUsers].sort((a, b) => {
      if (key === "name") {
        return direction === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      } else {
        return direction === "asc" ? a[key] - b[key] : b[key] - a[key];
      }
    });

    setSortedUsers(sorted);
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th onClick={() => sortByHead("id")}>ID</th>
            <th onClick={() => sortByHead("name")}>Name</th>
            <th onClick={() => sortByHead("age")}>Age</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Task50;
