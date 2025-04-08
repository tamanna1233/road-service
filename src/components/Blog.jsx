import { useEffect, useState } from 'react';
import { client } from '../sanity';
import { PortableText } from '@portabletext/react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const query = `*[_type == "post"]{
      _id,
      title,
      slug,
      body,
      mainImage {
        asset->{
          url
        }
      }
    }`;

    client.fetch(query).then(data => setBlogs(data));
  }, []);

  return (
    <div className="space-y-6 p-20">
      <h1 className="text-3xl font-bold">Blog Posts</h1>
      {blogs.map(blog => (
        <div key={blog._id} className="p-4 border rounded-xl shadow">
          <Link to={`/blog/${blog.slug.current}`}>
            <h2 className="text-2xl font-semibold mb-2 hover:underline">{blog.title}</h2>
          </Link>
          {blog.mainImage && (
            <img
              src={blog.mainImage.asset.url}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          )}
          <PortableText value={blog.body.slice(0, 1)} />
          <Link to={`/blog/${blog.slug.current}`} className="text-blue-600 underline mt-2 inline-block">
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
