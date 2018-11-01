import React, { useEffect, useState } from "react";
import { UserList } from "./UserList";

export function RemoteUserList({ size }) {
  const [users, setUsers] = useState([]);

  useEffect(
    async () => {
      // create an abort controller for fetch to be able to cancel it
      const controller = new AbortController();
      try {
        const response = await fetch(
          `https://randomuser.me/api/?results=${size}`,
          {
            signal: controller.signal
          }
        );
        const data = await response.json();
        setUsers(data.results);
      } catch (err) {
        if (err.name !== "AbortError") {
          // handle error
        }
      }
      // aborting request when cleaning up effect
      return () => {
        controller.abort();
      };
    },
    [size]
  );

  return <UserList users={users} />;
}
