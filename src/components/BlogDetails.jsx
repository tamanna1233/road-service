import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { client, urlFor } from '../sanity';
import { PortableText } from '@portabletext/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import LoadingAnimation from './Loadinganimation';

const BlogDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
      title,
      body,
      _createdAt,
      author->{name, image},
      mainImage { asset->{url} }
    }`;

    client.fetch(query, { slug }).then(setBlog);
  }, [slug]);

  if (!blog) return <LoadingAnimation />;

  return (
    <>
      {/* SEO Meta Tags */}
        <title>{blog.title}</title>
        <meta
          name="description"
          content="Explore this in-depth logistics article, covering insights, strategies, and tips from industry experts."
        />
        <meta
          name="keywords"
          content="logistics, supply chain, freight, shipping, warehousing, delivery, transportation"
        />
        <meta property="og:title" content={blog.title} />
        <meta
          property="og:description"
          content="Read this expert blog on logistics, shipping, and supply chain."
        />
        <meta
          property="og:image"
          content={blog.mainImage?.asset?.url || "https://example.com/default-thumbnail.jpg"}
        />
        <meta property="og:type" content="article" />

      {/* Blog Details */}
      <section className="bg-white text-black py-16 px-4 md:px-8 lg:px-20  relative">
        {/* Back Button - Fixed & Responsive */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-black hover:text-blue-800 absolute left-4 top-18 md:left-8 md:top-20"
        >
          <AiOutlineArrowLeft className="w-5 h-5" />
          <span className="hidden sm:inline">Back</span>
        </button>

        <div className="max-w-5xl mx-auto space-y-8 pt-12 sm:pt-16">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold">{blog.title}</h1>

          {/* Author Info */}
          <div className="flex items-center gap-4 text-sm text-black">
            {blog.author?.image && (
              <img
                src={urlFor(blog.author.image).width(50).url()}
                alt={blog.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
            <p>
              By <span className="font-semibold">{blog.author?.name || 'Unknown'}</span> •{' '}
              {new Date(blog._createdAt).toLocaleDateString()}
            </p>
          </div>

          {/* Main Image */}
          {blog.mainImage && (
            <img
              src={blog.mainImage.asset.url}
              alt={blog.title}
              className="w-full max-h-[500px] object-cover rounded-lg shadow-md"
            />
          )}

          {/* Blog Body */}
          <article className="prose prose-lg max-w-none font-roboto">
            <PortableText value={blog.body} />
          </article>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
