import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { TbEdit, TbEye, TbRowRemove } from "react-icons/tb";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const About = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const resData = await res.json();
    console.log("resData post == ", resData);
    setPosts(resData);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Layout>
      <>About</>
      {posts.length > 0 &&
        posts.map((item, i) => (
          <div style={{ width: "95%", margin: "auto" }}>
            <div
              style={{
                border: "1px solid black",
                width: "100%",
                padding: "5px 10px",
                marginBottom: "5px",
                borderRadius: "15px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "10px",
                }}
              >
                <h4>{item.title}</h4>
                <div style={{ display: "flex" }}>
                  <button
                    style={{
                      cursor: "pointer",
                      marginRight: "5px",
                      border: "1px solid orange",
                      background: "orange",
                      borderRadius: "25px",
                      color: "white",
                      padding: "2px 3px",
                    }}
                  >
                    <TbEdit style={{ fontSize: "25px" }} />
                  </button>
                  <button
                    style={{
                      cursor: "pointer",
                      marginRight: "5px",
                      border: "1px solid red",
                      background: "red",
                      borderRadius: "25px",
                      color: "white",
                      padding: "2px 3px",
                    }}
                  >
                    <MdDelete style={{ fontSize: "25px" }} />
                  </button>
                  <button
                    style={{
                      cursor: "pointer",
                      marginRight: "5px",
                      border: "1px solid skyblue",
                      background: "skyblue",
                      borderRadius: "25px",
                      color: "white",
                      padding: "2px 3px",
                    }}
                  >
                    <TbEye style={{ fontSize: "25px" }} />
                  </button>
                </div>
              </div>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
    </Layout>
  );
};

export default About;
