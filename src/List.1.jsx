import React, { useEffect, useState } from "react";

// $EXPORT-START$
export function List() {
  const [users, setUsers] = useState([]);

  // this will be called multiple times
  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=5`)
      .then(response => response.json())
      .then(data => {
        setUsers(data.results);
      });
  });

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
// $EXPORT-END$
