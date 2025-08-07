import React, { useContext, useEffect, useState } from "react";
import { BodyContext } from "../pages/Home";
import { Link } from "react-router-dom";

const TableBody = ({ filter }) => {
  const { data } = useContext(BodyContext);

  const [list, setList] = useState([]);

  useEffect(() => {
    if (filter) {
      const rData = data.filter((item) => item.city == filter);
      setList(rData);
    } else {
      setList(data);
    }
  }, [filter, data]);

  return (
    <>
      {list.length > 0 &&
        list.map((item, i) => (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.address?.city}</td>
            <td>
              <Link to={`/user-details/${item.id}`}>View</Link>
            </td>
          </tr>
        ))}
    </>
  );
};

export default TableBody;
