import { Link } from "react-router-dom";

const blogs = [
  { id: 1, content: "Content 1", title: "Blog 1" },
  { id: 2, content: "Content 2", title: "Blog 2" },
  { id: 3, content: "Content 3", title: "Blog 3" },
];

export default function Blogs() {
  return (
    <div>
      {blogs.map((blog) => (
        <Link to={`${blog.id}`}>
          <div key={blog.id}>{blog.title}</div>
        </Link>
      ))}
    </div>
  );
}
