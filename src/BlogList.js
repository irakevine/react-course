const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>

      {blogs.map((blog) => (
        
        <div className="blog-priview" key={blog._id} data-num={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <img src={blog.image} alt="kellen"/>
          <button onClick={() => handleDelete(blog.id)}>delete blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
