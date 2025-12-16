import { useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BLOGS, CATEGORIES } from "../../data/blogs";

function HorizontalSlider({ items, renderItem }) {
  const ref = useRef(null);

  const scroll = (dir) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        onClick={() => scroll(-1)}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-3 py-2 rounded-full"
        aria-label="Scroll left"
      >
        ◀
      </button>

      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-3 px-1"
      >
        {items.map(renderItem)}
      </div>

      <button
        onClick={() => scroll(1)}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow px-3 py-2 rounded-full"
        aria-label="Scroll right"
      >
        ▶
      </button>
    </div>
  );
}

function BlogCard({ blog }) {
  return (
    <div className="min-w-[260px] md:min-w-[290px] bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="h-40 bg-gray-100">
        {/* Replace with real images */}
        <div className="h-full w-full flex items-center justify-center text-gray-400 text-sm">
          Blog Image
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-[#252952] leading-snug">{blog.title}</h3>
        <p className="text-sm text-gray-500 mt-2">Topic: <span className="text-orange-500">{blog.topic}</span></p>
        <Link
          to={`/resources/blog/${blog.slug}`}
          className="inline-block mt-4 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default function ResourcesPage() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const latest = useMemo(() => BLOGS.filter(b => b.isLatest), []);
  const popular = useMemo(() => BLOGS.filter(b => b.isPopular), []);

  const filteredCategories = useMemo(() => {
    if (!q.trim()) return CATEGORIES;
    return CATEGORIES.filter(c => c.toLowerCase().includes(q.toLowerCase()));
  }, [q]);

  return (
    <div className="bg-white">
      {/* Title */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#252952]">
          Student Resources
        </h1>

        {/* Search bar (like screenshot) */}
        <div className="mt-8 flex justify-center">
          <div className="bg-gray-50 rounded-3xl px-6 py-6 w-full max-w-xl shadow-sm">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Looking for something?"
              className="w-full border rounded-xl px-4 py-2 outline-none focus:ring focus:ring-orange-200"
            />
            <button
              onClick={() => navigate("#categories")}
              className="mt-4 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-full"
            >
              Search
            </button>
          </div>
        </div>

        {/* Latest Blogs */}
        <h2 className="mt-14 text-3xl font-extrabold text-[#252952]">
          <span className="bg-orange-100 px-2">Latest</span> Blogs:
        </h2>

        <div className="mt-6">
          <HorizontalSlider
            items={latest}
            renderItem={(b) => <BlogCard key={b.slug} blog={b} />}
          />
        </div>

        {/* Popular Blogs */}
        <h2 className="mt-14 text-3xl font-extrabold text-[#252952]">
          <span className="bg-indigo-100 px-2">Popular</span> Blogs:
        </h2>

        <div className="mt-6">
          <HorizontalSlider
            items={popular}
            renderItem={(b) => <BlogCard key={b.slug} blog={b} />}
          />
        </div>
      </section>

      {/* Categories Grid (like screenshot) */}
      <section id="categories" className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-14">
          <h2 className="text-4xl font-extrabold text-[#252952]">
            <span className="bg-orange-100 px-2">All</span> Categories:
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => {
              const slug = encodeURIComponent(cat.toLowerCase());
              return (
                <Link
                  key={cat}
                  to={`/resources/category/${slug}`}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-8 text-center font-bold text-[#252952]"
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}