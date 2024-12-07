import {React,useEffect} from 'react';
import './Blogs-IC.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import IC_blogsData from './assets/IC_blogsData';


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
        <div className="blogs-container"data-aos="fade-up">
            {IC_blogsData.map(blog => (
                <div className="blog-item" key={blog.id}  data-aos="fade-up">
                    <div className="blog-author"  >
                        <div className="author-image" >
                            <img src={blog.imageUrl} alt="Blog Author" />
                        </div>
                        <div className="author-details">
                            <p className="name1">{blog.name}</p>
                            <p className="role">{blog.role}</p>
                            <div className="social-links ">
                                {blog.socialLinks.map((link, index) => (
                                    <a href={link.link} className="social-link "  target="_blank" rel="noopener noreferrer" key={index}>
                                        <FontAwesomeIcon icon={link.icon} />
                                    </a>
                                ))}
                                
                            </div>
                            <Link to={blog.Link} className="button"  target="_blank" rel="noopener noreferrer">Read Blog</Link>
                        </div>
                    </div>
                    <div className="blog-content" >
                        <p className="name">{blog.name}</p>
                        <p className="blog-title" >{blog.blogTitle}</p>
                        <p className="blog-description" >{blog.blogDescription}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Blogs;
