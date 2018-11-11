import React, { useEffect, useState } from "react";
import { UserList } from "./UserList";

export function RemoteUserList({ size }) {
  const [users, setUsers] = useState([]);

  useEffect(
    async () => {
      try {
        const response = await fetch(
          `https://randomuser.me/api/?results=${size}`
        );
        const data = await response.json();
        setUsers(data.results);
      } catch (err) {
        // handle error
      }
    },
    [size]
  );

  return <UserList users={users} />;
}
