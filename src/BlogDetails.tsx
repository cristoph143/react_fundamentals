import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const { id } = useParams();

    return (
        <>
        <div className="blog_list">
            <h2 className="title">List of Blog {id}</h2>
        </div>
        </>
    )
}

export default BlogDetails