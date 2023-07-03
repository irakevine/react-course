import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs] = useState([
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

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList blogs={blogs.filter((blog)=>blog.author === 'renaike')} title="renaike's Blogs!" />

    </div>
  );
};

export default Home;
