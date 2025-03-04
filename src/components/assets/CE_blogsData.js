import { faInstagram, faLinkedin, faFacebook, faMedium } from '@fortawesome/free-brands-svg-icons';
// import Sambhav from '../../components/blog images/Sambhav Jena.jpeg'
import Tanushree from '../../components/blog images/Tanushree Prasad.jpeg'
// eslint-disable-next-line 
import { time } from 'framer-motion';



 const CE_blogsData = [
    {
        id: 1,
        name: "Rohit Rai ",
        role: "Intern @ John Deere ",
        imageUrl: require('../../components/blog images/Rohit Rai.jpeg'),
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/rohit-rai-047a35193/", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: "Intern @ John Deere",
        Link:"https://medium.com/@mekanika2022/core-expedition-rohit-rai-john-deere-537eabdc9762",
        blogDescription: "Factors like projects and interns are the major touches in CV. Take proper guidance from a senior for making a good CV.",
        time:5
    },
    {
        id: 2,
        name: " Snehal Swadhin ",
        role: " Product @Ather Energy ",
        imageUrl: require('../../components/blog images/Snehal Swadhin.jpeg'),
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/snehalswadhin/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: "Product @Ather Energy ",
        Link:"https://medium.com/@mekanika2022/core-expedition-snehal-swadhin-ather-energy-d18d1b550819",
        blogDescription: "Machine Learning can be a bonus because it comes handy for a product analyst. Other than that, mainly focusing on your extracurricular activities is a must. Being a part of SpringFest or part of a cell, that helps because you’ll be facing real life problems, conducting events, talking and negotiating with people.",
        time:5
    },
    {
        id: 3,
        name: "   Praveen Yadav ",
        role: " Intern @ JLR",
        imageUrl: require('../../components/blog images/Praveen Yadav.jpeg'),
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/praveen-yadav-933437190/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: " Intern @ JLR",
        Link:"https://medium.com/@mekanika2022/core-expedition-praveen-yadav-jlr-e2bc279d5775",
        blogDescription: "They don’t specifically search for any particular skill set but pursuing some projects in the core mechanical domain, especially the automobile sector would be a big add-on. My projects and experiences at TeamKart proved quite handy as I had hands-on experiences with software like MATLAB, Simulink and Solidworks.",
        time:5
    },
    {
        id: 4,
        name: "  Manish S",
        role: " Intern @ JLR",
        imageUrl: require('../../components/blog images/Manish S.jpeg'),
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            // { name: "LinkedIn", link: "https://www.linkedin.com/in/ashutosh-dash-7b801b234/?trk=public_profile_browsemap&originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: " Intern @ JLR",
        Link:"https://medium.com/@mekanika2022/core-expedition-manish-s-jlr-4efae6406790",
        blogDescription: "For me, the resources that I referred to mostly were the textbooks that are recommended by professors. So, I mainly read through the chapters of the textbook. Practicing GATE questions will also help.",
        time:6
    },
    {
        id: 5,
        name: "  Ashutosh Dash",
        role: "   Intern @ Bajaj Auto Ltd",
        imageUrl: require('../../components/blog images/Ashutosh Dash.jpeg'),
       socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/ashutosh-dash-7b801b234/?trk=public_profile_browsemap&originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: "  Intern @ Bajaj Auto Ltd",
        Link:"https://medium.com/@mekanika2022/core-expedition-ashutosh-bajaj-48c336d08f8b",
        blogDescription: "For the finance domain, you should start before that because you need to study new topics apart from your coursework which requires a certain amount of time. So I believe starting 6–8 months before the internship season is an appropriate time..",
        time:5
    },
    {
        id: 6,
        name: " Debojyoti Roy",
        role: "  GTE Intern @ Bajaj Auto Ltd",
        imageUrl: require('../../components/blog images/Debojyoti Roy.jpeg'),
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/debojyoti-roy-bb5329233/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: "  GTE Intern @ Bajaj Auto ",
        Link:"https://medium.com/@mekanika2022/core-expedition-debojyoti-roy-bajaj-auto-76b4883c5bd3",
        blogDescription: "The ability to understand and appreciate the fundamental concepts of core mechanical engineering principles is essential. There should be more focus on the understanding of the concepts taught. Besides, a knowledge of CAD, FEM, and CFD will definitely help.",
        time:4
    },
    {
        id: 7,
        name: " Aditya Uppal",
        role: " PPO @ ITC & ex-KITES Intern",
        imageUrl: require('../../components/blog images/Aditya Uppal.jpeg'),
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/aditya-uppal/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: " PPO @ ITC & ex-KITES ",
        Link:"https://medium.com/@mekanika2022/core-expedition-aditya-uppal-itc-ba51bfda9a15",
        blogDescription: "PORs are a plus, but they aren’t essential. CGPA is a very strong deciding factor. They will also ask for your semester GPA. Mine had a declining trend and was therefore asked why was there a decline. Other than kite form they also shortlist based on CGPA so having a CGPA of above 8.8 or 8.9 would do. A CGPA above 9 is a plus. Projects are also very important..",
        time:5
    },
    {
        id: 8,
        name: " Chethan Girish",
        role: " KITES Intern @ ITC Limited",
        imageUrl: require('../../components/blog images/Chethan Girish.jpeg'),
       socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/chethan-girish/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: " KITES Intern @ ITC Ltd",
        Link:"https://medium.com/@mekanika2022/core-expedition-g-chethan-itc-75d4e9b1d318",
        blogDescription: "To ace the interview you require exceptionally good communication skills. Apart from this for core companies, you require knowledge on different core topics, and especially in my case, TeamKART helped me gain a lot of skills which had a great impact during my interview.",
        time:4
    },
    {
        id: 9,
        name: " Sayantan Sarkar",
        role: " Intern @ JLR",
        imageUrl: require('../../components/blog images/Sayantan Sarkar.jpeg'),
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            // { name: "LinkedIn", link: "https://www.linkedin.com/in/tanushree-prasad-134293232/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: " Intern @ JLR",
        Link:"https://medium.com/@mekanika2022/core-expedition-sayantan-sarkar-jlr-f47adb885418",
        blogDescription: "To get into an automotive company, you don’t need any extra subjects other than mechanical curriculum. You need to revise the thermodynamics, structures, etc. for the exam and nothing much is required. For 4yr students, it is good to study some subjects in 3rd year such as heat transfer, and design of machine elements as these will give you an edge over others.",
        time:4
    },
    {
        id: 10,
        name: " Tanushree Prasad",
        role: "Intern @ Tata Steel",
        imageUrl:Tanushree,
       socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/tanushree-prasad-134293232/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: "Intern @ Tata Steel",
        Link:"https://medium.com/@mekanika2022/core-expedition-tanushree-prasad-tata-steel-c8f6e8f39117",
        blogDescription: "Majorly to work in this domain one needs to have good knowledge about the core mechanical engineering concepts. One needs to have a very good hold on core subjects which we opt for in our fifth semester. Doing good preparation for these subjects in the semester will be enough to prepare for the core domain.",
        time : 5
    },
    {
        id: 11,
        name: " Sambhav Jena  ",
        role: "intern(core) @ Dr.Reddy's",
        imageUrl:require('../../components/blog images/Sambhav Jena.jpeg'),
        // imageUrl: require('../../components/blog images/Sambhav Jena.jpeg'),
        // imageUrl:"https://media.licdn.com/dms/image/v2/D5603AQFYjLFCtEg_uQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1688897873591?e=1732752000&v=beta&t=k36A6R4mbMVQXFjaKwlVLdHbazIZArcu3nybwLifzPk",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/sambhav-jena-7a7ab5200/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: "intern(core) @ Dr.Reddy's",
        Link:"https://medium.com/@mekanika2022/core-expedition-sambhav-jena-dr-reddys-laboratories-ea4c51dd1e78",
        blogDescription: "I started the preparation in a very structured manner. My priority during that time was to clear out concepts that would be needed for sustaining in core industry such as the basics of thermodynamics and fluid mechanics. Next, I started up with gate question answers that helped me tackle the tests associated with the selection process. I also spent some time reading books to prepare for HR questions..",
        time:6
    },
    {
        id: 12,
        name: " Aniketh S Gund  ",
        role: "Intern @ Tata Steel",
        imageUrl: require('../../components/blog images/Aniketh S Gund.jpeg'),
        // imageUrl:"https://media.licdn.com/dms/image/v2/D4D03AQHtCqufRIJ0YA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1699040399807?e=1732752000&v=beta&t=4NZFGupc6ip1mCGYXikob00USqcSeSbnhqE_csWW6E8",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/aniketh-sridhar-gund-b4b682226/?trk=people_directory&originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: "Intern @ Tata Steel",
         Link:"https://medium.com/@mekanika2022/core-expedition-aniketh-s-gund-tata-steel-d181f46cdfcf",
        blogDescription: " One should know the core subjects completely. Apart from that Tata is not much concerned about any software or extracurricular activities. As it is a management trainee position, the position is more aligned towards the overall handling of the teams and some technical stuff.",
        time:5
    },
    {
        id: 13,
        name: " Rakshit Raj ",
        role: "Intern @ Tata Steel",
        imageUrl: require('../../components/blog images/Rakshit Raj.jpg'),
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/rakshit-raj-329ba2204/", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: "Intern @ Tata Steel",
         Link: "https://medium.com/@mekanika2022/core-expedition-rakshit-raj-tata-steel-914483dbf864",
        blogDescription: "The first round was an online assessment, which included majorly logical reasoning, aptitude, and smart mathematics. The test also included a few mechanical conceptual-based questions.",
        time:5
    }
];

export default CE_blogsData;