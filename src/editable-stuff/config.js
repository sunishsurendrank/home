// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sunish",
  middleName: "",
  lastName: "Kannembath",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sunishsurendrank",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/sunishsurendrank",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/sunishkannembath/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sunishsurendrank/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/sunishsurendran/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/sunish.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/sunish.png"),
  imageSize: 375,
  message:
    "Research and Development Engineer with more than 6 years of experience in software engineering. Involved in architecture design and development of projects from scratch. Interested in Scalability, Serverless, Containers, and Machine learning",
  resume: "",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "sunishsurendrank", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Speaker",
  message:
    'Speaker at Global DevOps and Powershell Conference conducted by PowerShell.org  on the Topic Ogling the Next Normals in Modern Engineering.Presented PowerShell Scripting Concepts at Microsoft Bangalore India.Community Memeber of Bangalore IT Profesional user group.',
  images: [
    { 
      img: require("../editable-stuff/singapore.jpg"), 
      label: "Microsoft PowerShell Asia Conference", 
      paragraph: "" 
    },
    { 
      img: require("../editable-stuff/Conf.jpg"), 
      label: "Microsoft Signapore", 
      paragraph: "" 
    },
  ],
  imageSize: {
    width:"750",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 75 },
    { name: "Go Lang", value: 50 },
    { name: "PowerShell", value: 75 },
    { name: "Kubernetes", value: 85 },
    { name: "Distributed System Design", value: 85 },
    { name: "Jenkins", value: 90 },
    { name: "Docker", value: 65 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "sunishsurendrank@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [

    {
      role: 'Research and Development Engineer',
      companylogo: require('../assets/img/nokia.png'),
      date: ''
    },

    {
      role: 'Software Technologist I',// Here Add Company Name
      companylogo: require('../assets/img/philps.jpg'),
      date: '',
    },
    {
      role: 'Software Engineer',
      companylogo: require('../assets/img/accenture.png'),
      date: '',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
