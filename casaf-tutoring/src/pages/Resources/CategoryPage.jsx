import { Link, useParams } from "react-router-dom";
import { BLOGS } from "../../data/blogs";

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const category = decodeURIComponent(categorySlug);

  const list = BLOGS.filter(
    (b) => b.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <h1 className="text-4xl font-extrabold text-[#252952]">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h1>

      <div className="mt-8 space-y-6">
        {list.length === 0 ? (
          <p className="text-gray-500">No posts yet for this category.</p>
        ) : (
          list.map((b) => (
            <div key={b.slug} className="bg-white rounded-2xl shadow-md p-6 flex gap-6">
              <div className="w-28 h-28 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                Image
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#252952]">{b.title}</h2>
                <p className="text-gray-600 mt-2">{b.excerpt}</p>

                <div className="mt-3 text-sm text-gray-500 flex flex-wrap gap-6">
                  <span>Topic: <span className="text-orange-500">{b.topic}</span></span>
                  <span>{b.date}</span>
                  <span>Author: <b>{b.author}</b></span>
                </div>

                <Link
                  to={`/resources/blog/${b.slug}`}
                  className="inline-block mt-4 bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}