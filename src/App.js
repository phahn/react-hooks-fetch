import React, { useState } from "react";
import { RemoteUserList } from "./RemoteUserListWithHooks";

function App() {
  const [size, setSize] = useState(10);
  return (
    <div className="App">
      <label>Number of users displayed </label>
      <select value={size} onChange={e => setSize(e.target.value)}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="100">100</option>
      </select>
      <RemoteUserList size={size} />
    </div>
  );
}

export default App;
