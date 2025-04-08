import { useEffect, useState } from 'react';
import { client } from '../sanity';
import { PortableText } from '@portabletext/react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const query = `*[_type == "post"] | order(publishedAt desc){
      _id,
      title,
      slug,
      body,
      publishedAt,
      author->{name},
      mainImage {
        asset->{url}
      }
    }`;

    client.fetch(query).then(data => setBlogs(data));
  }, []);

  return (
    <>
      {/* React 19 style meta tags */}
      <title>Latest Logistic Blogs | Updates & Insights</title>
      <meta
        name="description"
        content="Explore the latest blogs in logistics, supply chain, and transportation. Stay informed with expert insights and updates."
      />
      <meta property="og:title" content="Latest Logistic Blogs | Insights & Updates" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />

      <div className="min-h-screen bg-black text-yellow-400 px-6 md:px-20 py-20">
        <h1 className="text-4xl font-semibold mb-6 border-yellow-500 pb-2 inline-block">
          Latest Logistic Blogs
        </h1>

        <div className="grid gap-10 md:grid-cols-2">
          {blogs.map(blog => (
            <div key={blog._id} className="bg-neutral-900 border border-yellow-600 rounded-2xl overflow-hidden shadow-lg p-6 transition-transform">
              {blog.mainImage?.asset?.url && (
                <img
                  src={blog.mainImage.asset.url}
                  alt={blog.title}
                  className="w-full h-60 object-cover mb-4 rounded"
                />
              )}

              <div>
                <Link to={`/blog/${blog.slug.current}`}>
                  <h2 className="text-2xl font-semibold mb-2 hover:text-yellow-300 transition">
                    {blog.title}
                  </h2>
                </Link>
                {blog.publishedAt && (
                  <p className="text-sm text-yellow-500 mb-2">
                    By {blog.author?.name || 'Unknown'} · {new Date(blog.publishedAt).toLocaleDateString()}
                  </p>
                )}
                {blog.body && blog.body.length > 0 && (
                  <>
                    <PortableText value={blog.body.slice(0, 1)} />
                    <Link
                      to={`/blog/${blog.slug.current}`}
                      className="text-yellow-300 font-medium hover:underline hover:text-blue-500 mt-4 inline-block"
                    >
                      Read More →
                    </Link>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;
