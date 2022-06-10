import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
// import axios from "axios";
import postsApi from "../../api/postsApi";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await postsApi.getAllBook();
        setPosts(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);
  console.log(posts);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}></Posts>
        <Sidebar />
      </div>
    </>
  );
}
