import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  const navigate = useNavigate();

  // Find the blog with the matching ID
  const blog = blogs?.find((blog) => blog.id === parseInt(id));
  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div className="isLoading">Loading</div>}
      {error && <div className="error">{error}</div>}
      {blog && (
        <article key={blog.id}>
          <h2 className="title">{blog.title}</h2>
          <button onClick={handleClick}>Delete</button>
          <p>Written by: {blog.author}</p>
          <div className="body">{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
