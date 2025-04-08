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
      publishedAt,
      author->{name},
      mainImage {
        asset->{url}
      }
    }`;

    client.fetch(query, { slug }).then(data => setBlog(data));
  }, [slug]);

  if (!blog) return <div className="p-20 text-yellow-400">Loading...</div>;

  return (
    <>
      {/* Static SEO Meta Tags */}
      <>
        <title>Logistics Blog - Insights, Supply Chain, Shipping Tips</title>
        <meta
          name="description"
          content="Explore in-depth logistics articles, supply chain strategies, and tips on shipping and warehousing in our expert blog."
        />
        <meta
          name="keywords"
          content="logistics, supply chain, freight, shipping, warehousing, delivery, transportation, cargo, warehouse"
        />
        <meta property="og:title" content="Logistics Blog - Expert Articles & News" />
        <meta
          property="og:description"
          content="Stay updated with our expert-written blogs on logistics, transport, and supply chain management."
        />
        <meta
          property="og:image"
          content="https://example.com/default-thumbnail.jpg"
        />
        <meta property="og:type" content="article" />
      </>

      {/* Blog Content */}
      <div className="p-20 space-y-6 bg-black text-yellow-400 min-h-screen">
        <h1 className="text-3xl font-semibold">{blog.title}</h1>
        {blog.publishedAt && (
          <p className="text-yellow-500 text-sm">
            By {blog.author?.name || 'Unknown'} ·{' '}
            {new Date(blog.publishedAt).toLocaleDateString()}
          </p>
        )}
        {blog.mainImage && (
          <img
            src={blog.mainImage.asset.url}
            alt={blog.title}
            className="w-full max-h-[500px] object-scale-down rounded-lg"
          />
        )}
        <PortableText value={blog.body} />
      </div>
    </>
  );
};

export default BlogDetails;
