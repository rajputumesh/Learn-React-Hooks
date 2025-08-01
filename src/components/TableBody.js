import React, { useContext, useEffect, useState } from "react";
import { BodyContext } from "../pages/Home";

const TableBody = ({ filter }) => {
  const { data } = useContext(BodyContext);

  const [list, setList] = useState(data);

  useEffect(() => {
    if (filter) {
      const rData = data.filter((item) => item.city == filter);
      setList(rData);
    } else {
      setList(data);
    }
  }, [filter]);

  return (
    <>
      {(list ?? []).map((item, i) => (
        <tr>
          <td>{item.name}</td>
          <td>{item.mobile}</td>
          <td>{item.email}</td>
          <td>{item.city}</td>
        </tr>
      ))}
    </>
  );
};

export default TableBody;
