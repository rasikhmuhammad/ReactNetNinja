const BlogList = ({ blogs, title, handleDelete }) => {
    return (
      <div className="blogs-list">
        <h1>{title}</h1>
        {blogs.map((blog) => (
          <div className="blogs-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p> Written by {blog.author}</p>
            <button>Delete</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default BlogList;
  