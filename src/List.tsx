import { useState } from "react";
import BlogList from "./BlogList";

const List = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  const handleDeleteBlog = (id) => {
    // delete id from blogs list
    setBlogs(blogs.filter((blog) => blog.id !== id));
};

  const title = 'Welcome! All Blogs Ahead!'
  const title1 = 'Mario\'s Blog!'
  console.log(blogs);
  const mario = blogs.filter(blog => blog.author === 'mario')
  console.log(mario)
  return (
    <>
      <BlogList blogs={blogs} title={title} handleDelete={handleDeleteBlog}/>
      <BlogList blogs={mario} title={title1} handleDelete={handleDeleteBlog} />
    </>
  );
};

export default List;
