import { faInstagram, faLinkedin, faFacebook, faMedium } from '@fortawesome/free-brands-svg-icons';
import AnuskaKulkarni from '../../components/blog images/AnuskaKulkarni.png'
// eslint-disable-next-line 
import { time } from 'framer-motion';


const IC_blogsData = [
    {
        id: 1,
        name: " Anushka Kulkarni ",
        role: "DS Intern @ Microsoft",
        imageUrl:  AnuskaKulkarni ,
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/anushka-kulkarni-5b69a91ba/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: "DS Intern @ Microsoft",
        Link: "https://medium.com/@mekanika2022/intern-chronicles-anushka-kulkarni-microsoft-03a3d2666a08",
        blogDescription: " I believe that one project and one intern would be good. It would be great if you could do more...",
        time: 5
    },
{
        id: 2,
        name: "Vivek Mirani",
        role: "Analyst @ Golman Sachs",
        
        imageUrl: require('../../components/blog images/Vivek Mirani.jpeg'),
        // imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQGsBJHGjqmegg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1709322233663?e=1732752000&v=beta&t=MqdBPXmuHVs7gaHanOXWO4-Dxp1utT5dHHpgymJE_DQ",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/vivek-mirani/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/people/Vivek-Mirani/100075615693685/?paipv=0&eav=AfZjcFCrc2ayFQ8vI9rz7MivzdnMx2kdUrJsyHZin7QECja9-stprYX5kwdIhf9Dr8Q&_rdr", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: "Analyst @ Golman Sachs",
        Link:"https://medium.com/@mekanika2022/intern-chronicles-vivek-mirani-goldman-sachs-28bef367675d",
        blogDescription: "Mostly the Quant profile companies ask questions based on Probability and Statistics and if you mention it then you will receive questions based on that but as Mechanical engineering students don’t have this course in the coursework I mentioned it beforehand so I did not receive questions based on distributions and most questions I was asked were logic based. Very good communication skills are also required as you should able to convey your points to the interviewer which one could gain through extracurricular activities.",
        time: 5
    },
    {
        id: 3,
        name: " Vanshul Shikkewal",
        role: "Data Scientist Intern @ PUMA",
        imageUrl: require('../../components/blog images/Vanshul Shikkewal.jpeg'),
        // imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEYZA4VNVfkrQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721043333308?e=1732752000&v=beta&t=ZOPt9HvAuMheM2AEdn96CqvXb0XUTL6g7g87x8aB9Yk",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/vanshul2723/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/vanshul.2723/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: " DS Intern @ PUMA ",
        Link:"https://medium.com/@mekanika2022/intern-chronicles-vanshul-shikkewal-puma-1bfcf4825234",
        blogDescription: " he cross-questioned me about those Algorithms and asked about their use cases while asking me to compare them to others. After he was satisfied with my responses, he asked me about my hobbies and questioned my subpar involvement in physical activities! The whole interview lasted around 25–35 minutes.",
        time: 5
    },
    {
        id: 4,
        name: "Manas Sharma",
        role: "BAI at McKinsey & Co.",
        imageUrl: require('../../components/blog images/Manas Sharma.jpeg'),
        // imageUrl: "https://media.licdn.com/dms/image/v2/C5603AQFlPtGoU9WOQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1647427501728?e=1732752000&v=beta&t=kY9hLun3HqUV9opKRS0z0HX_FjiXzfwln8D-w1kbHAk",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/manas-sharma-49376b213/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/people/Manas-Sharma/100006602749192/?paipv=0&eav=AfblcvS8tVDdSWx5Qp3Avn1jBy0ppn4gBbZOCTSX3j88Y42xo2tYXppD5RdZW6BE9Rs&_rdr", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: "BAI at McKinsey & Co.",
        Link:"https://medium.com/@mekanika2022/intern-chronicles-manas-sharma-mckinsey-company-70559e474178",
        blogDescription: "In consulting, you are interacting with a lot of people meeting clients trying to solve different business situations so the position of responsibility shows that you have taken command, you have taken responsibility for yourself, and you have run an organization in your tenure. I would say POR and academics are two major pillars of your CV. Having a good academic record will be helpful. Having a CGPA of more than 8.5 would be very safe.",
        time: 5
    },
    {
        id: 5,
        name: "Vanshika Prakash ",
        role: " Intern @MasterCard",
        imageUrl: require('../../components/blog images/Vanshika Prakash.jpeg'),
        // imageUrl: "https://media.licdn.com/dms/image/v2/D5603AQEdvtJEc4JmLw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713135256918?e=1732752000&v=beta&t=CDwv2YW0u_1pOIq4VINonie5ZvcyknrE9AlQ41_xYR8",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/vanshikaprakash19/", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/vanshika-prakash-1211241b9/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: " Intern @MasterCard",
        Link:"https://medium.com/@mekanika2022/intern-chronicles-vanshika-prakash-mastercard-9a789b0ff01b",
        blogDescription: "There were 2 interview rounds. Each of 1hr. In the 1st round, the interviewer asked me to start explaining about my projects. He asked questions on SQL like the difference between SQL and Excel, framed a detailed example, and wrote a query. He went on to ask me 2–3 puzzles and basic ML theory questions like variance, bias, plots, and a few HR questions.",
        time: 8
    },
    {
        id: 6,
        name: "Apurv Gaurav",
        role: "Analyst @ BlackRock ",
        imageUrl: require('../../components/blog images/Apurv Gaurav.jpeg'),
        // imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQETXWlT7UVwEA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1721124456342?e=1733961600&v=beta&t=UjHRQp97xU6wa277FZ1SOJGoP_R5eAECtZIrR9-5oJw",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/apurv-gaurav-68b175194/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: "Analyst @ BlackRock ",
        Link:"https://medium.com/@mekanika2022/intern-chronicles-apurv-gaurav-blackrock-5bdeee5eb209",
        blogDescription: " they look for candidates with quantitative aptitude and good temperament. Apart from theoretical finance one has to be smart with quantitative finance, risk modeling, and probability and statistics. Having knowledge of stochastic processes and calculus is also important. It is also important that the candidate has a good knowledge of time series modeling and machine learning as it comes in handy in this job profile.",
        time: 6
    },
    {
        id: 7,
        name: "Ahana Ganguly",
        role: "SWE Intern @ JLR",
        imageUrl: require('../../components/blog images/Ahana Ganguly.jpeg'),
        // imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQEIJ7pZ02_vTQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1703320168026?e=1732752000&v=beta&t=cZQgU1IzN4tFUmynxWzPmHMINMTyDpG8NLp5w8xNiPI",
        socialLinks: [
            { name: "Instagram", link: "https://www.instagram.com/mekanika_iitkgp?fbclid=IwAR0Zjcbj4FTv6DhzYw3wU97I-Jw9Wkn0-ZS5aYh-nn9OGgy3j4BkiMLfGM4", icon: faInstagram },
            { name: "LinkedIn", link: "https://www.linkedin.com/in/ahana-ganguly-b65313219/?originalSubdomain=in", icon: faLinkedin },
            { name: "Facebook", link: "https://www.facebook.com/mekanikaiitkgp/", icon: faFacebook },
            { name: "Medium", link: "https://medium.com/@mekanika2022", icon: faMedium }
        ],
        blogTitle: "SWE Intern @ JLR",
        Link:"https://medium.com/@mekanika2022/intern-chronicles-ahana-ganguly-jlr-14ad40d36b2e",
        blogDescription: " Specifically speaking about JLR one should at least have more than one project in Machine Learning and Software Development. Relevant prior interns will also help a lot in the selection process. For the software domain POR is not much needed.",
        time: 5
    },
    // Add other blog entries here
];
    
export default IC_blogsData;
