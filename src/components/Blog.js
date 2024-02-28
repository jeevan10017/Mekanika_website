import React from 'react';
import './Blog.css';

const Blogs = () => {
  const posts = [
    {
      id: 1,
      title: 'Tata Steel',
      href: 'https://medium.com/@mekanika2022/core-expedition-aniketh-s-gund-tata-steel-d181f46cdfcf',
      description:
        'One should know the core subjects completely. Apart from that Tata is not much concerned about any software or extracurricular activities. As it is a management trainee position, the position is more aligned towards the overall handling of the teams and some technical stuff...',
      date: 'Jan 24, 2024',
      datetime: 'Jan 24',
      category: { title: 'Core Expedition', href: 'https://medium.com/@mekanika2022/core-expedition-aniketh-s-gund-tata-steel-d181f46cdfcf' },
      author: {
        name: 'Aniketh S Gund',
        role: 'Incoming Management Trainee Intern (Technical) / IIT KGP 2025',
        href: 'https://www.linkedin.com/in/aniketh-sridhar-gund-b4b682226/?trk=people_directory&originalSubdomain=in',
        imageUrl:
          'https://miro.medium.com/v2/resize:fit:640/format:webp/1*Ye12uqiRKyT6laYAJBUVTA.jpeg',
      },
    },
    {
      id: 1,
      title: 'Tata Steel',
      href: 'https://medium.com/@mekanika2022/core-expedition-aniketh-s-gund-tata-steel-d181f46cdfcf',
      description:
        'One should know the core subjects completely. Apart from that Tata is not much concerned about any software or extracurricular activities. As it is a management trainee position, the position is more aligned towards the overall handling of the teams and some technical stuff...',
      date: 'Jan 24, 2024',
      datetime: 'Jan 24',
      category: { title: 'Core Expedition', href: 'https://medium.com/@mekanika2022/core-expedition-aniketh-s-gund-tata-steel-d181f46cdfcf' },
      author: {
        name: 'Aniketh S Gund',
        role: 'Incoming Management Trainee Intern (Technical) / IIT KGP 2025',
        href: 'https://www.linkedin.com/in/aniketh-sridhar-gund-b4b682226/?trk=people_directory&originalSubdomain=in',
        imageUrl:
          'https://miro.medium.com/v2/resize:fit:640/format:webp/1*Ye12uqiRKyT6laYAJBUVTA.jpeg',
      },
    },
    {
      id: 1,
      title: 'Tata Steel',
      href: 'https://medium.com/@mekanika2022/core-expedition-aniketh-s-gund-tata-steel-d181f46cdfcf',
      description:
        'One should know the core subjects completely. Apart from that Tata is not much concerned about any software or extracurricular activities. As it is a management trainee position, the position is more aligned towards the overall handling of the teams and some technical stuff...',
      date: 'Jan 24, 2024',
      datetime: 'Jan 24',
      category: { title: 'Core Expedition', href: 'https://medium.com/@mekanika2022/core-expedition-aniketh-s-gund-tata-steel-d181f46cdfcf' },
      author: {
        name: 'Aniketh S Gund',
        role: 'Incoming Management Trainee Intern (Technical) / IIT KGP 2025',
        href: 'https://www.linkedin.com/in/aniketh-sridhar-gund-b4b682226/?trk=people_directory&originalSubdomain=in',
        imageUrl:
          'https://miro.medium.com/v2/resize:fit:640/format:webp/1*Ye12uqiRKyT6laYAJBUVTA.jpeg',
      },
    },
    
  ];
  

  return (
    <div className="blog-container">

      <div className="blog-cards-container">
        {posts.map((post) => (
          <article key={post.id} className="blog-card" onClick={() => window.location.href = post.href}>
            <div className="blog-meta">
              <time dateTime={post.datetime} className="blog-date">
                {post.date}
              </time>
              <a href={post.category.href} className="blog-category">
                {post.category.title}
              </a>
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
            </div>
            <div className="blog-author">
              <img src={post.author.imageUrl} alt={post.author.name} className="blog-author-photo" />
              <div className="blog-author-info">
                <p className="blog-author-name">{post.author.name}</p>
                <p className="blog-author-role">{post.author.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
