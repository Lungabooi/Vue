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
        netlyfly:"https://helpful-crepe-78e297.netlify.app/"

      },
      {
        id: 2,
        img: "https://i.postimg.cc/dtqCTdzV/BMI.png",
        name: "BMI Calculator",
        title: "I designed this App using HTML CSS3 and JavaScript",
        github:"https://github.com/Lungabooi/BMI",
        netlyfly:"https://leafy-churros-3d5e87.netlify.app"
      },
      {
        id: 3,
        name: "Profile",
        img: "https://i.postimg.cc/763pdpPD/Profile.png",
        title:" I used Bootstrap and CSS and HTML",
        github:"https://github.com/Lungabooi/Profile",
        netlyfly:"https://melodic-peony-8638d6.netlify.app/"
      },
      {
        id: 4,
        name: "Restaurant",
        img:"https://i.postimg.cc/T1RY4j67/Restaurantly.png",
        title:"I was Inspired to create my front-end restaurant website",
        github:"https://github.com/Lungabooi/Restaurant",
        netlyfly:"https://charming-bombolone-f0e397.netlify.app/"
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
