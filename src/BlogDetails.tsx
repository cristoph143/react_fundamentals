import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");

  // Find the blog with the matching ID
  const blog = blogs?.find((blog) => blog.id === parseInt(id));

  return (
    <div className="blog-details">
      {isPending && <div className="isLoading">Loading</div>}
      {error && <div className="error">{error}</div>}
      {blog && (
        <article key={blog.id}>
          <h2 className="title">{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div className="body">{blog.body}</div>
        </article>
      )}
    </div>
  );
};


export default BlogDetails;
