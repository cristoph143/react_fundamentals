import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

interface Blog {
  id: number;
  title: string;
  author: string;
  body: string;
}

const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");
  
  // Manually check the data type to ensure it's an array of blogs
  const blogs: Blog[] = Array.isArray(data) ? data : [];

  const navigate = useNavigate();
  // Find the blog with the matching ID
  const blog = blogs.find((blog) => blog.id === parseInt(id as string));

  const handleClick = () => {
    if (blog) {
      fetch(`http://localhost:8000/blogs/${blog.id}`, {
        method: "DELETE",
      }).then(() => {
        navigate("/");
      });
    }
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
