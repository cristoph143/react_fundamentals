import useFetch from "./useFetch";
import BlogList from "./BlogList";
const List = () => {
  const title = "Welcome! All Blogs Ahead!";
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
  return (
    <>
      {error && <div className="error">{error}</div>}
      {isPending && <div className="isLoadinfg">Loading</div>}
      {blogs && (
        <BlogList blogs={blogs} title={title} />
      )}
    </>
  );
};

export default List;

// import { useState, useEffect } from "react";
// import BlogList from "./BlogList";
// // npx json-server --watch data/db.json --port 8000 -> run json server
// const List = () => {
// //   const [blogs, setBlogs] = useState(null);
//   const handleDeleteBlog = (id) => {
//     // delete id from blogs list
//     setBlogs(blogs.filter((blog) => blog.id !== id));
//   };
//   const title = "Welcome! All Blogs Ahead!";
// //   const [isPending, setIsPending] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [names, setName] = useState("mario");
//   //   useEffect(() => {
//   //     console.log("use effect ran");
//   //     console.log(names);
//   //   }, [names]);
// //   useEffect(() => {
// //     setTimeout(() => {
// //       fetch("http://localhost:8000/blogs")
// //         .then((res) => {
// //           console.log(res);
// //           if (!res.ok) {
// //             throw Error("could not fetch the data for that resource");
// //           }
// //           return res.json();
// //         })
// //         .then((data) => {
// //           console.log(data);
// //           setBlogs(data);
// //           setIsPending(false);
// //           setError(null);
// //         })
// //         .catch((err) => {
// //           setIsPending(false);
// //           console.log(err.message);
// //           setError(err.message);
// //         });
// //     }, 3000);
// //   }, []);
//   //   const title1 = "Mario's Blog!";
//   //   console.log(blogs);
//   //   const mario = blogs.filter((blog) => blog.author === "mario");
//   //   console.log(mario);
//   return (
//     <>
//       {error && <div className="error">{error}</div>}
//       {isPending && <div className="isLoadinfg">Loading</div>}
//       {blogs && (
//         <BlogList blogs={blogs} title={title} handleDelete={handleDeleteBlog} />
//       )}
//       {/* {blogs && (
//         <BlogList
//           blogs={mario}
//           title={title1}
//           handleDelete={handleDeleteBlog}
//         />
//       )} */}
//       <button onClick={() => setName("luigi")}>change name</button>
//       <p>{names}</p>
//     </>
//   );
// };

// export default List;
