import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  console.log(blogs);
  return (
    <>
      <h1>{title}</h1>
      <div className="list">
        {blogs.map((blog) => (
          <div className="preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
              <p>Written by {blog.author}</p>
            </Link>
            {/* <button
              onClick={() => {
                handleDelete(blog.id);
              }}
            >
              Delete Blog
            </button> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default BlogList;
