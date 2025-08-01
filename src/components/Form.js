import React, { useEffect, useState } from "react";

export const Form = ({a}) => {
  const [formData, setFormData] = useState([
    {
      name: "",
    },
  ]);

  // const inputChange = (e) => {
  //   console.log(e);
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  const inputChange = (e, name, index) => {
    const updatedData = [...formData];
    updatedData[index][name] = e.target.value;
    setFormData(updatedData);
  };

  // const addMore = () => {
  //   let data = formData;
  //   data.push({
  //     name: "",
  //   });
  //   setFormData(data);
  // };

  const addMore = () => {
    const newData = [...formData, { name: "" }];
    console.log("data == ", newData);
    setFormData(newData);
  };

  return (
    <div>
      <div>
        <form>
          {formData.map((item, i) => (
            <div key={i}>
              <input
                type="text"
                onChange={(e) => inputChange(e, "name", i)}
                value={item.name}
                style={{ border: "1px solid red" }}
              />
              <br />
              <br />
            </div>
          ))}
        </form>
        <button
          style={{ border: "1px solid black", padding: "2px 10px" }}
          type="button"
          onClick={() => addMore()}
        >
          Add
        </button>
      </div>
    </div>
  );
};
