import { useState, useEffect } from "react";
import BlogList from "./BlogList.js";

const Home = () => {
  const [blogs, setBlog] = useState(null);
  const [isPending, SetIsPending] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res => {
        return res.json()
    })
    .then(data => {
        setBlog(data)  
    })
  }, []);



  return (
    <section className="Home">
      <div className="container">
        <div className="profile">
          <h1>Rasikh Kazi</h1>
          <p>Creative and methodical front-end engineer</p>
        </div>
        <div className="profile-photo">
          <img src="./hero-image.jpg" alt="Profile Pic"></img>
        </div>
      </div>

      { blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </section>
  );
};

export default Home;
