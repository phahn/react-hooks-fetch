import React from "react";

export function UserList({ users }) {
  return (
    <div className="users__container">
      {users.map(user => (
        <User key={user.login.uuid} user={user} />
      ))}
    </div>
  );
}

function User({ user }) {
  return (
    <div className="users__user">
      <img src={user.picture.medium} />
      <div className="users__name">{`${user.name.first} ${
        user.name.last
      }`}</div>
    </div>
  );
}
