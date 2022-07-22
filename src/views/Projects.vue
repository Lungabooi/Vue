<template >
<div id="container-card">
    <div class="cards" v-for="(project, index) in getProjects" :key="index">
    <span>  <h3>{{project.name}}</h3> {{project.title}} <img :src="project.img"> <a :href="project.github"> <button  type="button" class="btn btn-warning mt-2"><box-icon type='logo' name='github'></box-icon></button> </a>| | <a :href="project.netlify" ><button type="button" class="btn btn-warning mt-2"><box-icon type='logo' name='netlify'></box-icon></button></a></span>
</div></div>


</template>
<script>
export default {
  computed: {
    getProjects() {
      return this.$store.state.projects
    }
  },
}

</script>
<style scoped>
h6{
    color:black;
}

.cards{ 
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap: wrap;
color:white;
font-family: San-Francisco;
margin: 30px;
height: 440px;
width: 300px;
background-color: #17141d;
border-radius: 10px;
box-shadow: -1rem 0 3rem #000;
transition: 0.4s ease-out;
position: relative;
left: 0px;   
}
.cards:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -1px, 0px);
}
#container-card{
  display:flex;
  flex-wrap: wrap;
  margin:auto;
  justify-content: space-evenly;
  background-image:url(https://i.postimg.cc/mrPYK8hX/steve-johnson-Q5-Pso6-WD7-NA-unsplash.jpg);
  background-attachment: fixed;
  background-size: cover;
}
img{
  width:290px;
  height:290px;
  padding-left:10px;
  
}
</style>