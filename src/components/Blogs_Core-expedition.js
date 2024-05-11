import React from 'react';
import './Blogs-CE.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faFacebook, faMedium } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import img_sayantan from '../components/Images/sayantan.png'
import img_manish from '../components/Images/manish1.png'


const BlogData = [
    {
        id1: 1,
        name1: " Aniketh S Gund  ",
        role1: "Intern @ Tata Steel",
        imageUrl1:"https://media.licdn.com/dms/image/D4D03AQHtCqufRIJ0YA/profile-displayphoto-shrink_400_400/0/1699040399807?e=1720656000&v=beta&t=TVSrDV-9MOw7u3qMk0uqdFY6NDeN4l9EJPBpn5uCWTM",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/aniketh-sridhar-gund-b4b682226/?trk=people_directory&originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle1: "Intern @ Tata Steel",
        Link:"https://medium.com/@mekanika2022/core-expedition-aniketh-s-gund-tata-steel-d181f46cdfcf",
        blogDescription1: " One should know the core subjects completely. Apart from that Tata is not much concerned about any software or extracurricular activities. As it is a management trainee position, the position is more aligned towards the overall handling of the teams and some technical stuff."
    },
    {
        id1: 2,
        name1: " Sambhav Jena  ",
        role1: "intern(core) @ Dr.Reddy's",
        imageUrl1:"https://media.licdn.com/dms/image/D5603AQFYjLFCtEg_uQ/profile-displayphoto-shrink_400_400/0/1688897873591?e=1720656000&v=beta&t=F6f7OatuIQIVGEbjwL-kPg-pfNa2Uf0Krk7NaecIA00",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/sambhav-jena-7a7ab5200/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle1: "intern(core) @ Dr.Reddy's",
        Link:"https://medium.com/@mekanika2022/core-expedition-sambhav-jena-dr-reddys-laboratories-ea4c51dd1e78",
        blogDescription1: "I started the preparation in a very structured manner. My priority during that time was to clear out concepts that would be needed for sustaining in core industry such as the basics of thermodynamics and fluid mechanics. Next, I started up with gate question answers that helped me tackle the tests associated with the selection process. I also spent some time reading books to prepare for HR questions.."
    },
    {
        id1: 3,
        name1: " Tanushree Prasad",
        role1: "Intern @ Tata Steel",
        imageUrl1:"https://media.licdn.com/dms/image/D4D03AQGymmq6Dyn2IA/profile-displayphoto-shrink_400_400/0/1696237061231?e=1720656000&v=beta&t=-aWX9rUX4h3m29dgx6-K7on2ND2LwukFBT5uFGKUrvM",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/tanushree-prasad-134293232/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle1: "Intern @ Tata Steel",
        Link:"https://medium.com/@mekanika2022/core-expedition-tanushree-prasad-tata-steel-c8f6e8f39117",
        blogDescription1: "Majorly to work in this domain one needs to have good knowledge about the core mechanical engineering concepts. One needs to have a very good hold on core subjects which we opt for in our fifth semester. Doing good preparation for these subjects in the semester will be enough to prepare for the core domain."
    },
   
    {
        id1: 4,
        name1: " Sayantan Sarkar",
        role1: "Intern @ JLR",
        imageUrl1:img_sayantan,
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            // { name: "LinkedIn", link: "https://www.linkedin.com/in/tanushree-prasad-134293232/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle1: "Intern @ JLR",
        Link:"https://medium.com/@mekanika2022/core-expedition-sayantan-sarkar-jlr-f47adb885418",
        blogDescription1: "To get into an automotive company, you don’t need any extra subjects other than mechanical curriculum. You need to revise the thermodynamics, structures, etc. for the exam and nothing much is required. For 4yr students, it is good to study some subjects in 3rd year such as heat transfer, and design of machine elements as these will give you an edge over others."
    },
    {
        id1: 5,
        name1: " Chethan Girish",
        role1: " KITES Intern @ ITC Limited",
        imageUrl1:"https://media.licdn.com/dms/image/D4E03AQFbwn-a6vzhZQ/profile-displayphoto-shrink_400_400/0/1688113084979?e=1720656000&v=beta&t=yj8KcGU365g40Y9d1PXNnvDICVIfY89GLqOxRZuorUM",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/chethan-girish/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle1: " KITES Intern @ ITC Limited",
        Link:"https://medium.com/@mekanika2022/core-expedition-g-chethan-itc-75d4e9b1d318",
        blogDescription1: "To ace the interview you require exceptionally good communication skills. Apart from this for core companies, you require knowledge on different core topics, and especially in my case, TeamKART helped me gain a lot of skills which had a great impact during my interview."
    },
    {
        id1: 6,
        name1: " Aditya Uppal",
        role1: " PPO @ ITC & ex-KITES Intern",
        imageUrl1:"https://media.licdn.com/dms/image/D4D03AQGaLsb_nR1nIQ/profile-displayphoto-shrink_400_400/0/1715067438148?e=1720656000&v=beta&t=BAVVsPm7nC8u67C41ynAobwxPYmXHj__W9NEy7WY3qc",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/aditya-uppal/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle1: " PPO @ ITC & ex-KITES Intern",
        Link:"https://medium.com/@mekanika2022/core-expedition-aditya-uppal-itc-ba51bfda9a15",
        blogDescription1: "PORs are a plus, but they aren’t essential. CGPA is a very strong deciding factor. They will also ask for your semester GPA. Mine had a declining trend and was therefore asked why was there a decline. Other than kite form they also shortlist based on CGPA so having a CGPA of above 8.8 or 8.9 would do. A CGPA above 9 is a plus. Projects are also very important.."
    },
    {
        id1: 7,
        name1: " Debojyoti Roy",
        role1: "  GTE Intern @ Bajaj Auto Ltd",
        imageUrl1:"https://media.licdn.com/dms/image/D5603AQHD7H51yM7mfQ/profile-displayphoto-shrink_400_400/0/1677567130138?e=1720656000&v=beta&t=V0ACM4iMtzWii0bNLwMo7tY4zKIM3XdANoagC4bFOm8",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/debojyoti-roy-bb5329233/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle1: "  GTE Intern @ Bajaj Auto Ltd",
        Link:"https://medium.com/@mekanika2022/core-expedition-debojyoti-roy-bajaj-auto-76b4883c5bd3",
        blogDescription1: "The ability to understand and appreciate the fundamental concepts of core mechanical engineering principles is essential. There should be more focus on the understanding of the concepts taught. Besides, a knowledge of CAD, FEM, and CFD will definitely help."
    },
    {
        id1: 8,
        name1: "  Ashutosh Dash",
        role1: "   Intern @ Bajaj Auto Ltd",
        imageUrl1:"https://media.licdn.com/dms/image/D5603AQH54F9JU3Z8qw/profile-displayphoto-shrink_400_400/0/1703677512493?e=1720656000&v=beta&t=iqkq_HWDo1grLMa-fyP3jQy3KD7WqFSt_mUUjhI1LLg",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/ashutosh-dash-7b801b234/?trk=public_profile_browsemap&originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle1: "  Intern @ Bajaj Auto Ltd",
        Link:"https://medium.com/@mekanika2022/core-expedition-ashutosh-bajaj-48c336d08f8b",
        blogDescription1: "For the finance domain, you should start before that because you need to study new topics apart from your coursework which requires a certain amount of time. So I believe starting 6–8 months before the internship season is an appropriate time.."
    },
    {
        id1: 9,
        name1: "  Manish S",
        role1: " Intern @ JLR",
        imageUrl1:img_manish,
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            // { name: "LinkedIn", link: "https://www.linkedin.com/in/ashutosh-dash-7b801b234/?trk=public_profile_browsemap&originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle1: " Intern @ JLR",
        Link:"https://medium.com/@mekanika2022/core-expedition-manish-s-jlr-4efae6406790",
        blogDescription1: "For me, the resources that I referred to mostly were the textbooks that are recommended by professors. So, I mainly read through the chapters of the textbook. Practicing GATE questions will also help."
    },
    {
        id1: 10,
        name1: "   Praveen Yadav ",
        role1: " Intern @ JLR",
        imageUrl1:"https://media.licdn.com/dms/image/D4D03AQFIdRGd6wmdMA/profile-displayphoto-shrink_400_400/0/1693891981802?e=1720656000&v=beta&t=giGip-JirnLQrr65kN3RF74JgBalB2r8MtPn5D1Ozlg",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/praveen-yadav-933437190/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle1: " Intern @ JLR",
        Link:"https://medium.com/@mekanika2022/core-expedition-praveen-yadav-jlr-e2bc279d5775",
        blogDescription1: "They don’t specifically search for any particular skill set but pursuing some projects in the core mechanical domain, especially the automobile sector would be a big add-on. My projects and experiences at TeamKart proved quite handy as I had hands-on experiences with software like MATLAB, Simulink and Solidworks."
    },
    {
        id1: 11,
        name1: " Snehal Swadhin ",
        role1: " Product @Ather Energy ",
        imageUrl1:"https://media.licdn.com/dms/image/D4D03AQEtJcYqWGT0nw/profile-displayphoto-shrink_400_400/0/1680937466698?e=1720656000&v=beta&t=xCYcImQdNiCvzNdNJE2bxh-rnj9xM12xTHFXi7Z2PvI",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/snehalswadhin/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle1: "Product @Ather Energy ",
        Link:"https://medium.com/@mekanika2022/core-expedition-snehal-swadhin-ather-energy-d18d1b550819",
        blogDescription1: "Machine Learning can be a bonus because it comes handy for a product analyst. Other than that, mainly focusing on your extracurricular activities is a must. Being a part of SpringFest or part of a cell, that helps because you’ll be facing real life problems, conducting events, talking and negotiating with people."
    },
    {
        id1: 12,
        name1: "Rohit Rai ",
        role1: "Intern @ John Deere ",
        imageUrl1:"https://media.licdn.com/dms/image/D5603AQEa9xmSl1MuTQ/profile-displayphoto-shrink_400_400/0/1680640880510?e=1720656000&v=beta&t=nEQIWzuH9a3ee4kEZ1-cJ0FpX9OpJb_ICUZegMDwu_Q",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/rohit-rai-047a35193/", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle1: "Intern @ John Deere",
        Link:"https://medium.com/@mekanika2022/core-expedition-rohit-rai-john-deere-537eabdc9762",
        blogDescription1: "Factors like projects and interns are the major touches in CV. Take proper guidance from a senior for making a good CV."
    },
   
    
];
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
    return (
        <div className="blogs-container1">
            {BlogData.map(blog => (
                <div className="blog-item1" key={blog.id1}>
                    <div className="blog-author">
                        <div className="author-image">
                            <img src={blog.imageUrl1} alt="Blog Author" />
                        </div>
                        <div className="author-details">
                            <p className="name1">{blog.name1}</p>
                            <p className="role">{blog.role1}</p>
                            <div className="social-links">
                                {blog.socialLinks.map((link, index) => (
                                    <a href={link.link} className="social-link" key={index}>
                                        <FontAwesomeIcon icon={link.icon} />
                                    </a>
                                ))}
                                
                            </div>
                            <Link to={blog.Link} className="button1">Read Blog</Link>
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
