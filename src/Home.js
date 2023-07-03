import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "my new website",
      body: "gtloremkngklgbvcdtterehgjdhhf",
      author: "nevillen",
      id: 1,
    },
    {
      title: "welcome Party",
      body: "rhtlortemmmjjhugdhtrefdfgfgdrtt5",
      author: "renaike",
      id: 2,
    },
    {
      title: "my new website",
      body: "hekhillouytuyuhhyriruirgrrew",
      author: "nevie",
      id: 3,
    },
  ]);
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
