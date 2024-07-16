import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { post as post1 } from '../blogPosts/benefits-outsourcing-dirt-removal-hauling';
import { post as post2 } from '../blogPosts/reliable-agricultural-hauling-central-illinois';

const BlogPostContainer = styled.article`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 1rem;
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const BlogTitle = styled.h1`
  color: var(--primary-red);
  margin-bottom: 1rem;
`;

const BlogMeta = styled.div`
  color: var(--black);
  margin-bottom: 2rem;
  font-style: italic;
`;

const BlogContent = styled.div`
  line-height: 1.6;
  
  h2 {
    color: var(--primary-red);
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
  }
`;

const blogPosts = {
  [post1.slug]: post1,
  [post2.slug]: post2,
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts[slug];

  if (!post) return <div>Post not found</div>;

  return (
    <BlogPostContainer>
      <Helmet>
        <title>{post.title} - Wendling Trucking Blog</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={`${post.title} - Wendling Trucking Blog`} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={`https://www.wendlingtrucking.com${post.image}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <BlogImage src={post.image} alt={post.title} />
      <BlogTitle>{post.title}</BlogTitle>
      <BlogMeta>
        Published on {post.publishDate} by {post.author}
      </BlogMeta>
      <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />
    </BlogPostContainer>
  );
};

export default BlogPost;