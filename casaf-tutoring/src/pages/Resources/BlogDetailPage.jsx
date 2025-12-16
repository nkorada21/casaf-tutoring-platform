import { Link, useParams } from "react-router-dom";
import { BLOGS } from "../../data/blogs";

export default function BlogDetailPage() {
  const { slug } = useParams();
  const blog = BLOGS.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <p className="text-gray-600">Blog not found.</p>
        <Link className="text-orange-600 hover:underline" to="/resources">Back to Resources</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-extrabold text-[#252952]">{blog.title}</h1>
      <div className="mt-3 text-gray-500 text-sm flex flex-wrap gap-6">
        <span>Topic: <span className="text-orange-500">{blog.topic}</span></span>
        <span>{blog.date}</span>
        <span>Author: <b>{blog.author}</b></span>
      </div>

      <div className="mt-8 bg-gray-50 rounded-2xl p-6 text-gray-700 leading-relaxed">
        {/* Replace later with real content from backend */}
        <p>
          {blog.excerpt} This is the full blog page. You can now connect this to your backend
          (MongoDB) and load real content by slug/category.
        </p>
      </div>

      <Link to="/resources" className="inline-block mt-8 text-orange-600 hover:underline">
        ← Back to Resources
      </Link>
    </div>
  );
}