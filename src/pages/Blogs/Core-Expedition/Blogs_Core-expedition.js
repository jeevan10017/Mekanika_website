import {React, useEffect} from 'react';
import './Blogs-CE.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import CE_blogsData from '../../../components/assets/CE_blogsData';



const blogItems = document.querySelectorAll('.blog-item');

function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

window.addEventListener('scroll', () => {
    blogItems.forEach(blogItem => {
        if (checkVisible(blogItem)) {
            blogItem.style.opacity = '1';
        }
    });
});
const Blogs = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out',
        });
      }, []);

    return (
        <div className="blogs-container1"data-aos="fade-up">
            {CE_blogsData.map(blog => (
                <div className="blog-item1" key={blog.id1} data-aos="fade-up">
                    <div className="blog-author">
                        <div className="author-image">
                            <img src={blog.imageUrl1} alt="Blog Author" />
                        </div>
                        <div className="author-details">
                            <p className="name1">{blog.name1}</p>
                            <p className="role">{blog.role1}</p>
                            <div className="social-links">
                                {blog.socialLinks.map((link, index) => (
                                    <a href={link.link} className="social-link" key={index} target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={link.icon} />
                                    </a>
                                ))}
                            </div>
                            <a href={blog.Link} className="button1" target="_blank" rel="noopener noreferrer">Read Blog</a>
                        </div>
                    </div>
                    <div className="blog-content1">
                        <p className="name">{blog.name1}</p>
                        <p className="blog-title1">{blog.blogTitle1}</p>
                        <p className="blog-description">{blog.blogDescription1}</p>
                    </div>
                </div>
            ))}
        </div>
    );
    
}

export default Blogs;
