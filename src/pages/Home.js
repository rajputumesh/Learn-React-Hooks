import React, { createContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import DataList from "../components/DataList";
import apiService from "../services/api";

export const BodyContext = createContext();

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonData = await res.json();
    setData(jsonData);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log("data", data);

  return (
    <Layout>
      <input onKeyUp={(e) => setData(e.target.value)} />
    </Layout>
  );
};

export default Home;
