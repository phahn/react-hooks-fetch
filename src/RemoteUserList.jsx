import React from "react";
import { UserList } from "./UserList";

export class RemoteUserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    // abort controller for the in progress fetch
    this.controller = null;
  }

  componentDidMount() {
    // on mount fetch users
    this.fetchUsers();
  }

  componentWillUnmount() {
    // on unmount cancel in progress requests
    this.abortCurrentRequest();
  }

  componentDidUpdate(prevProps) {
    // when size changes we need to refetch users
    if (this.props.size !== prevProps.size) {
      this.fetchUsers();
    }
  }

  async fetchUsers() {
    // cancel in progress request
    this.abortCurrentRequest();

    // create an abort controller for fetch to be able to cancel it
    this.controller = new AbortController();

    try {
      const response = await fetch(
        `https://randomuser.me/api/?results=${this.props.size}`,
        {
          signal: this.controller.signal
        }
      );
      const data = await response.json();
      this.setState({ users: data.results });
    } catch (err) {
      if (err.name !== "AbortError") {
        // handle error
      }
    }
  }

  abortCurrentRequest() {
    if (this.controller) {
      this.controller.abort();
    }
  }

  render() {
    return <UserList users={this.state.users} />;
  }
}
