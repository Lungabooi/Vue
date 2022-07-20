import { createStore } from 'vuex'

export default createStore({
  state: {
    Projects:[
      {
        id: 1,
        name: "Calculator",
        title:" I created this calculator using HTML CSS3 and JavaScript",
        github: "https://github.com/Lungabooi/calculator",
        netlyfly:"https://helpful-crepe-78e297.netlify.app/"

      },
      {
        id: 2,
        name: "BMI Calculator",
        title: "I designed this App using HTML CSS3 and JavaScript",
        github:"https://github.com/Lungabooi/BMI",
        netlyfly:"https://leafy-churros-3d5e87.netlify.app"
      },
      {
        id: 3,
        name: "Profile",
        title:" I used Bootstrap and CSS and HTML",
        github:"https://github.com/Lungabooi/Profile",
        netlyfly:"https://melodic-peony-8638d6.netlify.app/"
      },
      {
        id: 4,
        name: "",
        title:"",
        github:"",
        natlyfly:""
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
