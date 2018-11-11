import React, { useEffect, useState } from "react";

export function List({ pageSize }) {
  const [users, setUsers] = useState([]);

  // this will be called when pageSize changes
  useEffect(
    () => {
      fetch(`https://randomuser.me/api/?results=${pageSize}`)
        .then(response => response.json())
        .then(data => {
          setUsers(data.results);
        });
    },
    [pageSize]
  );

  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.login.uuid}>
            {`${user.name.first} ${user.name.last}`}
            <img src={user.picture.thumbnail} />
          </li>
        ))}
      </ul>
    </>
  );
}
