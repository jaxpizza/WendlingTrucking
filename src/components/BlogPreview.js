import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { post as post1 } from '../blogPosts/benefits-outsourcing-dirt-removal-hauling';
import { post as post2 } from '../blogPosts/reliable-agricultural-hauling-central-illinois';

const BlogPreviewSection = styled.section`
  padding: 6rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--primary-red);
  font-size: 2.5rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled.article`
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1.5rem;
`;

const BlogTitle = styled.h3`
  color: var(--primary-red);
  margin-top: 0;
`;

const ReadMoreLink = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  color: var(--primary-red);
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BlogPreview = () => {
  const recentPosts = [post1, post2].sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));

  return (
    <BlogPreviewSection>
      <SectionTitle>Latest from Our Blog</SectionTitle>
      <BlogGrid>
        {recentPosts.map(post => (
          <BlogCard key={post.id}>
            <BlogImage src={post.previewImage} alt={post.title} />
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <p>{post.excerpt}</p>
              <ReadMoreLink to={`/blog/${post.slug}`}>Read More</ReadMoreLink>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogPreviewSection>
  );
};

export default BlogPreview;