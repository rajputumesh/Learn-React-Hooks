import React, { createContext, useEffect, useState } from "react";
import Layout from "../components/Layout";
import DataList from "../components/DataList";

export const BodyContext = createContext();

const Home = () => {
  const rowData = [
    {
      name: "Amit Sharma",
      mobile: "9876543210",
      city: "Delhi",
      email: "amit.sharma@example.com",
    },
    {
      name: "Neha Verma",
      mobile: "9123456780",
      city: "Kolkata",
      email: "neha.verma@example.com",
    },
    {
      name: "Rahul Gupta",
      mobile: "9988776655",
      city: "Kolkata",
      email: "rahul.gupta@example.com",
    },
    {
      name: "Sneha Kapoor",
      mobile: "9090909090",
      city: "Kolkata",
      email: "sneha.kapoor@example.com",
    },
    {
      name: "Vikas Yadav",
      mobile: "9234567890",
      city: "Delhi",
      email: "vikas.yadav@example.com",
    },
    {
      name: "Priya Singh",
      mobile: "9345678901",
      city: "Bhopal",
      email: "priya.singh@example.com",
    },
    {
      name: "Ankit Mehra",
      mobile: "9456789012",
      city: "Kolkata",
      email: "ankit.mehra@example.com",
    },
    {
      name: "Divya Patel",
      mobile: "9567890123",
      city: "Delhi",
      email: "divya.patel@example.com",
    },
    {
      name: "Rohan Das",
      mobile: "9678901234",
      city: "Bhopal",
      email: "rohan.das@example.com",
    },
    {
      name: "Kajal Bansal",
      mobile: "9789012345",
      city: "Delhi",
      email: "kajal.bansal@example.com",
    },
    {
      name: "Saurabh Jain",
      mobile: "9890123456",
      city: "Bhopal",
      email: "saurabh.jain@example.com",
    },
    {
      name: "Meena Iyer",
      mobile: "9901234567",
      city: "Delhi",
      email: "meena.iyer@example.com",
    },
    {
      name: "Tushar Rana",
      mobile: "9012345678",
      city: "Bhopal",
      email: "tushar.rana@example.com",
    },
    {
      name: "Nisha Roy",
      mobile: "9123456789",
      city: "Noida",
      email: "nisha.roy@example.com",
    },
    {
      name: "Ravi Kumar",
      mobile: "9234567891",
      city: "Delhi",
      email: "ravi.kumar@example.com",
    },
    {
      name: "Deepa Nair",
      mobile: "9345678912",
      city: "Noida",
      email: "deepa.nair@example.com",
    },
    {
      name: "Mohit Sinha",
      mobile: "9456789123",
      city: "Kolkata",
      email: "mohit.sinha@example.com",
    },
    {
      name: "Aarti Jain",
      mobile: "9567891234",
      city: "Noida",
      email: "aarti.jain@example.com",
    },
    {
      name: "Sameer Khan",
      mobile: "9678912345",
      city: "Kolkata",
      email: "sameer.khan@example.com",
    },
    {
      name: "Ritu Malhotra",
      mobile: "9789123456",
      city: "Noida",
      email: "ritu.malhotra@example.com",
    },
  ];
  const [data, setData] = useState(rowData);

  return (
    <Layout>
      <BodyContext.Provider value={{ data }}>
        <DataList />
      </BodyContext.Provider>
    </Layout>
  );
};

export default Home;
