const BlogList = (props) => {
  const blogs = props.blogs
  const title = props.title
  console.log(blogs)
  return (
    <>
    <h1>{title}</h1>
      <div className="list">
        {blogs.map((blog) => (
          <div className="preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
