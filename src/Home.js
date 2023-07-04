import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  const [name, setName] = useState("kellen");

  useEffect(() => {
    fetch("https://my-brand-frontend.onrender.com/myapi/blog")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        setBlogs(data.data);
        return data;
      });
  }, []);
  return (
    <div className="home">
      {blogs && (
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          handleDelete={handleDelete}
        />
      )}
      <button onClick={() => setName("kevine")}>changeName</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
