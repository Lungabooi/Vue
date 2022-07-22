import { createStore } from 'vuex'

export default createStore({
  state: {
    projects:[
      {
        id: 1,
        img:"https://i.postimg.cc/QC3CQGCT/Calculator.png",
        name: "Calculator",
        title:" I created this calculator using HTML CSS3 and JavaScript",
        github: "https://github.com/Lungabooi/calculator",
        netlify:"https://helpful-crepe-78e297.netlify.app/"

      },
      {
        id: 2,
        img: "https://i.postimg.cc/dtqCTdzV/BMI.png",
        name: "BMI Calculator",
        title: "I designed this App using HTML CSS3 and JavaScript",
        github:"https://github.com/Lungabooi/BMI",
        netlify:"https://leafy-churros-3d5e87.netlify.app"
      },
      {
        id: 3,
        name: "Profile",
        img: "https://i.postimg.cc/763pdpPD/Profile.png",
        title:" I used Bootstrap and CSS and HTML",
        github:"https://github.com/Lungabooi/Profile",
        netlify:"https://melodic-peony-8638d6.netlify.app/"
      },
      {
        id: 4,
        name: "Restaurant",
        img:"https://i.postimg.cc/T1RY4j67/Restaurantly.png",
        title:"I was Inspired to create my front-end restaurant website",
        github:"https://github.com/Lungabooi/Restaurant",
        netlify:"https://charming-bombolone-f0e397.netlify.app/"
      },
      {
        id: 5,
        name: "ToDo App",
        img:"https://i.postimg.cc/5twvq9gx/TodoApp.png",
        title:"This is my todo web application",
        github:"https://github.com/Lungabooi/todo",
        netlify:"https://ornate-crepe-3f6c20.netlify.app"
      },
      {
        id: 6,
        name: "Temp Convertor",
        img:"https://i.postimg.cc/y6XDfr0T/Temp-convetor.png",
        title:"This is my tempreture convertor web application",
        github:"https://github.com/Lungabooi/Temp",
        netlify:"https://ornate-puppy-61fbf1.netlify.app"
      }
      
      
    ],
     testimonials:[
      {
        id: 1, 
        img:"https://i.postimg.cc/59n8Sd68/jason.jpg",
        name:"Jason Wandrag",
        occupation:"Lecturer",
        message:"I can see that Lunga has many strengths as a developer. He likes to participate or help his peers with the work when he knows the answer. He is usually quite cheerful in class. His coding is improving steadily, and he seems to learn quickly from working in a team. As long as he stays focused in his studies, Lunga will continue to do well."

      },
      {
        id: 2, 
        img:"https://i.postimg.cc/fy1CNbkS/godwin-2.jpg",
        name:"Godwin Dzvapatsva",
        occupation:"Head of Curriculum",
        message:"I seem to learn something new about Lunga every day. He has shown great potential in coding using HTML, CSS and Bootstrap. Lunga has a gentle personality, which allows him to work well with his classmates."

      },
      {
        id:3, 
        img:"https://i.postimg.cc/J0QXT4ZW/Smangele-3-1.jpg",
        name:"Smangele Mntungwa",
        occupation:"Lecturer",
        message:"Lunga is one of the most humble characters I've ever come across, he is always eager to assist the next person. He has shown great dedication and work ethic, I admire his time management. "

      },
      {
        id: 4, 
        img:"https://i.postimg.cc/xdxnPrcF/Sabelo-2-min.jpg",
        name:"Sabelo Mdashe",
        occupation:"Lecturer",
        message:"Lunga is a very ambitious, diligent, driven and versatile individual with specific goals he wishes to achieve. He has an amicable personality with excellent people’s skills. He has excellent computer skills with an uncanny ability to diagnose technical problems with ease."

      },
      {
        id: 5, 
        img:"https://i.postimg.cc/3wRCqpxJ/Raaid-4.jpg",
        name:"Raaid Abdullatief",
        occupation:"Lecturer",
        message:"One of the most hardworking and committed people I've worked with. You can see the passion in his projects as you scroll down the page. Always a pleasure to work with."
      },
      {
        id: 6, 
        img:"https://i.postimg.cc/N0pC9B5L/Tshimologo-2-1.jpg",
        name:"Tshimologo King Mabena",
        occupation:"Lecturer",
        message:"Lunga is a hard-worker, has a great eye for detail and enthusiastic. His energy sparks life within the team. A true asset for every one that engages with him."
      }
     ],
     resumes:[
      {
        id:1,
        date:" 28 March 2022",
        text:"I started in Life Choices ",
        location:"Life Choices"

      },
      {
        id:2,
        date:" 20 February 2020",
        text:"I became a digital Associate",
        location:"Capa Citi"

      },
      {
        id:3,
        date:"28 June 2018",
        text:"I started at Master House Plan as Admin Assistant ",
        location:"Master House Plan and Construction"
      },
      {
        id:4,
        date:"November 2017",
        text:"I finished my Matric ",
        location:"Masiyile Senior Secondary School"
      }
     ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
