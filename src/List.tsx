import { useState, useEffect } from "react";
import BlogList from "./BlogList";
// npx json-server --watch data/db.json --port 8000 -> run json server
const List = () => {
  const [blogs, setBlogs] = useState(null);
  const handleDeleteBlog = (id) => {
    // delete id from blogs list
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const title = "Welcome! All Blogs Ahead!";

  const [names, setName] = useState("mario");
  //   useEffect(() => {
  //     console.log("use effect ran");
  //     console.log(names);
  //   }, [names]);
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);
//   const title1 = "Mario's Blog!";
//   console.log(blogs);
//   const mario = blogs.filter((blog) => blog.author === "mario");
//   console.log(mario);
  return (
    <>
      {blogs && (
        <BlogList blogs={blogs} title={title} handleDelete={handleDeleteBlog} />
      )}
      {/* {blogs && (
        <BlogList
          blogs={mario}
          title={title1}
          handleDelete={handleDeleteBlog}
        />
      )} */}
      <button onClick={() => setName("luigi")}>change name</button>
      <p>{names}</p>
    </>
  );
};

export default List;
