import React from 'react'
import Blog from '../components/Blog'

const Blogspage = () => {
  return (
    <div>
      <title>Logistics Insights & Fleet Management Blog | Walia Group</title>
        <meta
          name="description"
          content="Explore expert blogs from Walia Group of Companies on logistics, fleet safety, dispatch operations, warehousing, and industry trends in North America."
        />
        <meta
          name="keywords"
          content="logistics blog, fleet management tips, dispatch blog, transportation trends, freight news, trucking articles"
        />
        <meta name="author" content="Walia Group of Companies" />
        <meta property="og:title" content="Logistics Blog | Walia Group of Companies" />
        <meta
          property="og:description"
          content="Stay updated with logistics insights, fleet safety knowledge, and dispatch strategies from the Walia Group of Companies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://road-service-omega.vercel.app/blog" />
        <meta property="og:image" content="https://road-service-omega.vercel.app/blog-banner.jpg" />
        <link rel="canonical" href="https://road-service-omega.vercel.app/blog" />
      <Blog/>
    </div>
  )
}

export default Blogspage
