import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    // send blog to API
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        setIsPending(true)
        console.log("new blog added");
        setTitle("");
        setBody("");
        setAuthor("");
      })
      .catch((err) => {
        setIsPending(false)
        console.log(err);
      });
  };
  return (
    <>
      <div className="create">
        <h2 className="title">Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog Body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog Author:</label>
          <select
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="mario">mario</option>
            <option value="yoshi">yoshi</option>
          </select>
          {!isPending && <button>Add Blog</button>}
          {isPending && <button disabled>Add Blog</button>}
          <p>{title}</p>
          <p>{body}</p>
          <p>{author}</p>
        </form>
      </div>
    </>
  );
};

export default Create;
