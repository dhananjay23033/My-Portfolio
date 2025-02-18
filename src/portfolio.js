/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Dhananjay's Portfolio",
  description:
    "A driven innovator who excels in building impactful projects, combining technical expertise and strategic thinking to deliver scalable solutions and foster meaningful change.",
  og: {
    title: "Dhananjay Sharma's Portfolio",
    type: "website",
    url: "http://dhnanj.com/",
  },
};

//Home Page
const greeting = {
  title: "Dhananjay Sharma",
  logo_name: "Dhananjay Sharma",
  nickname: "",
  subTitle:
    "A driven innovator who excels in building impactful projects, combining technical expertise and strategic thinking to deliver scalable solutions and foster meaningful change.",
  resumeLink:
    "https://drive.google.com/file/d/1yO3CfiJfUN8JxyMQ4yilcNgEx-Oup5yu/view",
  portfolio_repository: "https://github.com/dhananjay23033/myPortfolio/",
  githubProfile: "https://github.com/dhananjay23033/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/dhnanj2/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/dhnanj/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:dhnanj2@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/dhnanj2",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100040863162374",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/dhnanj2/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using solo android apps using Kotlin and jetpack compose",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/dhnanj/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/dhnanj2",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/dj_sharma",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/dhnanj",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indraprastha Institute of Information Technology Delhi",
      subtitle: "M.Tech in Computer Science Engineering",
      logo_path: "iiitd_logo.png",
      alt_name: "IIIT-Delhi",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Completed coursework in Object-Oriented Programming and Design, Introduction to Graduate Algorithms, Information Retrieval, and other related subjects, achieving a CGPA of 9.29.",
        "⚡ Successfully completed teaching assistantships for courses such as CSE101 - Introduction to Programming, CSE222 - Analysis and Design of Algorithms, and CSE525 - Introduction to Graduate Algorithms.",
      ],
      website_link: "http://iiitd.ac.in",
    },
    {
      title: "University School of Information, Communication and Technology",
      subtitle: "B.Tech in Electronics & Communication Engineering",
      logo_path: "GGSIPU_logo.webp",
      alt_name: "Guru Gobind Singh Indraprastha University",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Completed coursework in Computer Architecture & Operating Systems, Data Structures & Algorithms, Computer Networks, Database Management, Digital & Analog Electronics, Signal & Systems and other related subjects, achieving a CGPA of 8.85.",
      ],
      website_link: "http://www.ipu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Problem Solving - Intermediate",
      subtitle: "HackeRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/c6b20777d561",
      alt_name: "HackeRank",
      color_code: "#8C151599",
    },
    {
      title: "Problem Solving - Basics",
      subtitle: "HackeRank",
      logo_path: "hackerrank.png",
      certificate_link: "https://www.hackerrank.com/certificates/df9252edd920",
      alt_name: "HackeRank",
      color_code: "#8C151599",
    },
    {
      title: "Data Structures",
      subtitle: "- Daniel M Kane",
      logo_path: "UC_San_Diego.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/EXWZY9YPBZ2K",
      alt_name: "UC SanDiego",
      color_code: "#8C151599",
    },
    {
      title: "Algorithms",
      subtitle: "- Daniel M Kane",
      logo_path: "UC_San_Diego.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/KNZMNAWRBQMK",
      alt_name: "UC SanDiego",
      color_code: "#8C151599",
    },
    {
      title: "Data Structures and Algorithms",
      subtitle: "- Mr. Sandeep Jain",
      logo_path: "gfg.png",
      certificate_link:
        "https://media.geeksforgeeks.org/courses/certificates/d45fa63656c005fdee1d6356ee32d64c.pdf",
      alt_name: "GeeksForGeeks",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Upcoming Assistant-Development-Manager",
          company: "EXL",
          company_url: "https://www.exlservice.com/",
          logo_path: "EXL_logo.png",
          duration: "July 2025",
          location: "Noida, Delhi-NCR",
          description:
            "Solve business problems, using artificial Intelligence (AI), machine learning (ML), data engineering and various other advanced technology methods.	Code & develop algorithms to craft sophisticated digital solutions.	Developing Digital solutions using HyperAutomation skills including Artificial Intelligence, Machine Learning, Software Development, Cloud and Automation (RPA platforms like UiPath, Power Automate, Microsoft Technologies (Visual Studio .Net, ASP.Net, API Integration) and AI Platforms like Amelia, Lex, Google CCAI, BOT).	Work on Conversational AI, NLP/NLU modelling, and Omni channel communication platforms",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "SWE Intern",
          company: "STMicroelectronics",
          company_url: "https://www.st.com/content/st_com/en.html",
          logo_path: "STM_logo.png",
          duration: "Jan 2025 - Jul 2025",
          location: "Noida, Delhi-NCR",
          description:
            "Working with Research & Development wing for the Memory Management Department. Tech Stack: UNIX, LINUX, XML, YML, JSON, Python, Jinja2, etc..",
          color: "#000000",
        },
        {
          title: "SDE Intern",
          company: "Eurus Networks Services",
          company_url: "https://www.eurus.net/",
          logo_path: "Eurus_logo.svg",
          duration: "Jan 2024 - May 2024",
          location: "Delhi, IND",
          description:
            "Worked on solving the issue of VoIP services for mobile clients by developing a robust RESTful API using Node.js and Firebase Cloud Messaging. Implemented a stateless, JSON-based API endpoint that efficiently manages push notifications to wake up SIP applications in background mode, enabling seamless mobile client communication through a single, purpose-built notification dispatch mechanism.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ai_me.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
