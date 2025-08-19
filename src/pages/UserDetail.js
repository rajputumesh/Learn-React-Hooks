import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const UserDetail = () => {
  const { user_id } = useParams();
  const [data, getData] = useState({});

  const getDetail = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`);
    const resData = await res.json();
    console.log(resData);
    getData(resData);
  };

  useEffect(() => {
    getDetail();
  }, [user_id]);

  return (
    <Layout>
      <div style={{ background: "#ffff9540", padding: "20px" }}>
        {data && (
          <div>
            <p>Name : {data?.name}</p>
            <p>User Name : {data?.username}</p>
            <p>Email : {data?.email}</p>
            <p>
              Address : {data?.address?.street}, {data?.address?.city},{" "}
              {data?.address?.suite}, {data?.address?.zipcode},{" "}
              {data?.address?.geo?.lat}
            </p>
            <p>Phone : {data?.phone}</p>
            <p>Website : {data?.website}</p>
            <p>company : {data?.company?.name}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default UserDetail;
