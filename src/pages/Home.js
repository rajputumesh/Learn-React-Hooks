import React, { createContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import DataList from "../components/DataList";
import apiService from "../services/api";

export const BodyContext = createContext();

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await apiService.getUsers();
      const resData = await res.json();
      setData(resData);
    } catch (error) {
      console.log("error users api ", error);
    }
  };

  console.log("data == ", data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <BodyContext.Provider value={{ data }}>
        <DataList />
      </BodyContext.Provider>
    </Layout>
  );
};

export default Home;
