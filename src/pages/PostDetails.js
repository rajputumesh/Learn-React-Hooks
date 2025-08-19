import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const PostDetails = () => {
  const { post_id } = useParams();
  const [post, setPost] = useState({});

  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const resData = await res.json();
    const filterPost = resData.filter((item) => item.id == post_id);
    filterPost.length > 0 && setPost(filterPost[0]);
  };

  useEffect(() => {
    getPosts();
  }, [post_id]);

  console.log("post = ", post);
  

  return <Layout>{post_id}</Layout>;
};

export default PostDetails;
