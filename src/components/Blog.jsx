import React, { useEffect, useState } from "react";
import { client } from "../sanity";
import { urlFor } from "../sanity"; // Make sure this utility exists

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState(["All"]);

  useEffect(() => {
    const query = `*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      categories[]->{title},
      author->{name, image},
      mainImage { asset->{url} }
    }`;

    client.fetch(query).then((data) => {
      console.log("Fetched Blogs:", data);
      setBlogs(data);
      setFilteredBlogs(data);

      // ✅ Extract and flatten unique categories from all posts
      const allCats = new Set();
      data.forEach((post) => {
        post.categories?.forEach((cat) => allCats.add(cat.title));
      });
      setCategories(["All", ...Array.from(allCats)]);
    });
  }, []);

  useEffect(() => {
    let updated = [...blogs];

    if (category !== "All") {
      updated = updated.filter((post) =>
        post.categories?.some((cat) => cat.title === category)
      );
    }

    if (searchTerm.trim()) {
      updated = updated.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBlogs(updated);
  }, [category, searchTerm, blogs]);

  return (
    <section id="blog" className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-barlow">Blog</h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto" />
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto font-roboto">
            Stay updated with the latest insights, trends, and news from the logistics industry.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-4 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-md transition-colors duration-300 font-barlow ${
                  cat === category
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredBlogs.map((post) => (
            <div key={post._id} className="bg-neutral-100 rounded-xl overflow-hidden shadow">
              {post.mainImage ? (
                <img
                  src={urlFor(post.mainImage).width(600).url()}
                  alt={post.title}
                  className="w-full h-56 object-cover"
                />
              ) : (
                <div className="w-full h-56 bg-gray-300 flex items-center justify-center text-gray-600">
                  No Image
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-2">
                  {(post.categories || []).map((cat, index) => (
                    <span
                      key={index}
                      className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-md font-barlow"
                    >
                      {cat.title}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-black my-2 font-barlow">{post.title}</h3>
                <p className="text-gray-700 text-sm font-roboto line-clamp-3 mb-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center mb-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden bg-black mr-3">
                    {post.author?.image ? (
                      <img
                        src={urlFor(post.author.image).width(100).url()}
                        alt={post.author.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white text-xs">
                        No Img
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-black font-barlow">{post.author.name}</p>
                    <p className="text-xs text-gray-500 font-roboto">
                      {new Date(post.publishedAt).toDateString()} • {post.readTime || "5 min read"}
                    </p>
                  </div>
                </div>
                <a
                  href={`/blog/${post.slug.current}`}
                  className="text-sm text-black font-semibold hover:text-yellow-600 transition-colors duration-300 font-barlow"
                >
                  Read Full Article →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
