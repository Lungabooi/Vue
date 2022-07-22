<template>
<div id="container-card">
    <div  class="cards" v-for="(testimonial, index) in getTestimonials" :key="index">
    <span>  <h5> {{testimonial.name}} </h5> <img  :src="testimonial.img"><p class="message"> {{testimonial.message}}</p></span>

</div></div>


</template>
<script>
export default {
  name: 'HomeView',
  computed: {
    getTestimonials() {
      return this.$store.state.testimonials
    }
  },
  
}

</script>
<style scoped >
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
margin-left: 70px;   
}
.cards:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -1px, 0px);
}
#container-card{
  display:flex;
  flex-wrap: wrap;
  margin:auto;
  /* justify-content: space-evenly; */
  background-image:url(https://i.postimg.cc/NMwfNKTC/City.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;

}
img{
  width:290px;
  height:300px;
  margin: auto;
  
}
.message{
    display:flex;
    align-self: center;
    font-size: 10px;
    width:80%;
    
}
p{
    margin: auto;
    margin-top:5px;
}
    
</style>