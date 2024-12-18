import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import IC_blogsData from '../../../components/assets/IC_blogsData';
import { GlareCard } from '../../../components/ui/glare-Crad.jsx';
import { MediumRegister } from '../../../components/MediumRegister.jsx';

const BlogsIC = () => {
    useEffect(() => {
        AOS.init({ duration: 1200, easing: 'ease-in-out' });
    }, []);

    return (
        <div className="min-h-screen bg-gray-950 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center mt-20">
                    <h2 className="text-2xl lg:text-4xl font-extrabold text-gradient bg-clip-text text-transparent bg-pink-700 text-center mb-0 sm:mb-20  sm:text-left">
                        Explore Our Intern Chronicles Blog Series
                    </h2>
                    <p className=" text-sm text-gray-400 sm:ml-4 text-center sm:text-left mt-2 mb-20 sm:mt-0">(Core)</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-4">
                    {IC_blogsData.map((blog) => (
                        <GlareCard
                            key={blog.id}
                            className="relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl  shadow-pink-700 overflow-hidden shadow-md hover:scale-105 transform transition-transform duration-500 "
                            data-aos="fade-up"
                        >
                            {/* Author Image */}
                            <div className="relative">
                                <img
                                    src={blog.imageUrl}
                                    alt="Author"
                                    className="opacity-70 w-full h-60 object-cover rounded-2xl p-1 "
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-center">
                                        <p className="text-lg text-pink-500 font-extrabold">{blog.name}</p>
                                        <p className="text-sm italic text-gray-300">{blog.role}</p>
                                        <div className="flex justify-center space-x-3 mt-3">
                                            {blog.socialLinks.map((link, index) => (
                                                <a
                                                    href={link.link}
                                                    key={index}
                                                    className="text-gray-300 hover:text-pink-500 transition duration-300"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FontAwesomeIcon icon={link.icon} size="lg" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Blog Content */}
                            <div className="p-6 relative">
                                <h3 className="text-xl font-semibold text-pink-600 mb-2">
                                    {blog.blogTitle}
                                </h3>
                                <p className="text-gray-400 text-sm line-clamp-3 mb-8">
                                    {blog.blogDescription}
                                </p>
                                <Link
                                    to={blog.Link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group text-pink-600 font-bold flex items-center space-x-2 text-sm hover:text-yellow-500 transition-all"
                                >
                                    <span>Read Blog</span>
                                    <span className="transform group-hover:translate-x-2 transition-transform">
                                        →
                                    </span>
                                </Link>
                            </div>
                            {/* Time at Bottom-Right */}
                            <p className="absolute bottom-4 right-4 text-sm text-gray-500">
                                {blog.time} min read
                            </p>
                        </GlareCard>
                    ))}
                </div>
            </div>
            <MediumRegister/>
        </div>
    );
};

export default BlogsIC;
