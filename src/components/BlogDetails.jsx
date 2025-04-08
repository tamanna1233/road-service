// src/pages/BlogDetails.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { client } from '../sanity';
import { PortableText } from '@portabletext/react';

const BlogDetails = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      mainImage {
        asset->{
          url
        }
      }
    }`;

    client.fetch(query, { slug }).then(data => setBlog(data));
  }, [slug]);

  if (!blog) return <div className="p-20">Loading...</div>;

  return (
    <div className="p-20 space-y-6">
      <h1 className="text-4xl font-bold">{blog.title}</h1>
      {blog.mainImage && (
        <img
          src={blog.mainImage.asset.url}
          alt={blog.title}
          className="w-full max-h-[500px] object-cover rounded-lg"
        />
      )}
      <PortableText value={blog.body} />
    </div>
  );
};

export default BlogDetails;
