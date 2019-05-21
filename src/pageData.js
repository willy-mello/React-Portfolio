const pageData = {
  main: {
    name: "Willy Mello",
    occupation: "Software Engineer",
    description: " I am incredibly interested in building apps with social and recreational utility. I have experience working with React, React-Native, Node.js, Express, Sequelize, PostgreSQL and Firebase.",
    image: "profilepic.jpg",
    bio: "I am a graduate of Fullstack Acacemy in NYC; former enthusiastic educator with a combined 6 years of teaching, coaching, and mentorship experience at a public school in Montana and independent school in New Jersey. I love fishing, snowboarding, sailing, and bouldering",
    contactmessage: "In Development",
    email: "cwmello165@gmail.com",
    phone: "508-207-6386",
    address: {
      street: "",
      city: "Mattapoisett",
      state: "MA",
      zip: ""
    },
    website: "https://willy-mello.github.io/react-portfolio",
    resumedownload: "https://willy-mello.github.io",
    social: [
      {
        name: "facebook",
        url: "https://www.facebook.com/willy.mello",
        className: "fa fa-facebook"
      },
      {
        name: "stackoverflow",
        url: "https://stackoverflow.com/users/10946155/charles-mello",
        className: "fa fa-stack-overflow"
      },
      {
        name: "google-plus",
        url: "http://googleplus.com/cwmello165",
        className: "fa fa-google-plus"
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/cwmello3",
        className: "fa fa-linkedin"
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/chilliamello3/",
        className: "fa fa-instagram"
      },
      {
        name: "github",
        url: "http://github.com/willy-mello",
        className: "fa fa-github"
      }
    ]
  },
  resume: {
    skillmessage: "",
    education: [
      {
        school: "Full Stack Academy",
        degree: "1810 Immersive NERD Stack",
        graduated: "February 2019",
        description: "#1 ranked coding bootcamp in the USA, emphasizing pair programming, test driven development and the ability to learn whole language libraries within 3 months."
      },
      {
        school: "Duke University",
        degree: "BA US/ Canadian History",
        graduated: "May 2011",
        description: "4 year varsity wrestler, local middleschool tutor, weekend fisherman"
      }
    ],
    work: [
      {
        company: "Jetsweat Fitness",
        title: "Software Development Intern",
        years: "April 2019-Present",
        description: "Full Stack development on gen 2 of company web app"
      },
      {
        company: "Blair Academy",
        title: "Teacher, Coach and Housemaster ",
        years: "May 2015 - June 2018",
        description: "Taught AP US History and Global Issues. Integrated primary source analysis, effective class discussions and  project-based learning into course syllabi. Served as live-in housemaster of West Hall for 26 students. Led practices, managed travel, and coached team resulting in a #1 high school wrestling program ranking in the USA."
      },
      {
        company: "Utterback Middle School",
        title: "Teacher and 3 Sport Coach",
        years: "March 2012 - May 2015",
        description: "Taught 6th, 7th, and 8th grade students English and History. Coached high school and middle school wrestling, track and football."
      }
    ],
    skills: [
      {
        name: "Git",
        level: "80%"
      },
      {
        name: "Redux",
        level: "70%"
      },
      {
        name: "ReactJs",
        level: "80%"
      },
      {
        name: "CSS",
        level: "80%"
      },
      {
        name: "React Native",
        level: "75%"
      },
      {
        name: "REST APIs",
        level: "80%"
      },
      {
        name: "PostgreSQL",
        level: "80%"
      },
      {
        name: "JavaScript",
        level: "80%"
      }
    ]
  },
  portfolio: {
    projects: [
      {
        title: "BrewDog Bacchus",
        category: "An app for the indecisive beer fan",
        image: "bacchus.jpg",
        url: "https://expo.io/@cwmello/expoBeer"
      },
      {
        title: "Vibe 2.0",
        category: "My React Spotify App (in development)",
        image: "vibe2.png",
        url: "https://github.com/willy-mello/spotify-data-vis"
      },
      {
        "title": "Personal Website",
        category: "You're HERE!",
        image: "portfolio.png",
        url: "https://willy-mello.github.io/react-portfolio/"
      },
      {
        "title": "Pandemic Clone",
        category: "Senior Fullstack Project (phone controller view)",
        image: "pandemic.jpg",
        url: "https://pandemic-clone.firebaseapp.com/board"
      }

    ]
  },
  testimonials: {
    testimonials: [
      {
        text: "He's definitely related to me.",
        user: "USAF Captain Robert Mello"
      },
      {
        text: "That was graceful",
        user: "Fellow climber who saw me fall that one time"
      }
    ]
  }
}

export default pageData