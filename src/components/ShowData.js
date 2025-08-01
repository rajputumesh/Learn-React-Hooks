import React, { useState } from "react";
import TableBody from "./TableBody";

const ShowData = () => {
  const [filter, setFilter] = useState();
  const search = (value) => {
    setFilter(value);
  };

  const reset = () => {
    setFilter(null);
  };
  return (
    <div>
      <div>
        <select onChange={(e) => search(e.target.value)}>
          <option value="">select city</option>
          <option>Delhi</option>
          <option>Kolkata</option>
          <option>Noida</option>
          <option>Bhopal</option>
        </select>
        <button onClick={() => reset()}>Clear</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <TableBody filter={filter} />
        </tbody>
      </table>
    </div>
  );
};

export default ShowData;
