<template >
<h1>About Me</h1>

  <div class="container fluid">
  
 <div class="col">  <p class="text">Hi I am Lunga Booi
  Full Stack Developer
I am a curious person who loves reading and understanding the content from the roots.
I became interested in coding when I did personal research about it.
My favourite languages are Python and JavaScript. I spend half of my time coding on my computer.
My passion is to design and develop web applications.</p>
 </div>

    <div class="col">
    <img id="about-pic" src="https://i.postimg.cc/rshkbdbJ/9-BF3-E51-D-57-C5-49-C6-BA88-AE494436-B96-B.jpg"  style="width: 280px" alt="" /></div>
    <div class="icons">
        <i class="fa-solid fa-database"></i>
        <i class="fa-brands fa-vuejs"></i>
        <i class="fa-brands fa-js"></i>
        <i class="fa-brands fa-bootstrap"></i>
        <i class="fa-brands fa-node"></i>
        <i class="fa-brands fa-windows"></i>
        <i class="fa-brands fa-linux"></i>
        <i class="fa-brands fa-git-alt"></i>
        
    </div>

    </div>


 
</template>
<script>
export default {
  
}
</script>
<style scoped >
.container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
 font-family:serif;
}
p{
   font-family:serif;
}
.text{
  display:flex;
  align-content: center;
  align-self: center;
  cursor: pointer;
  flex-wrap: wrap;
  margin:auto
  
}
#about-pic:hover {
  opacity: 0.5;
}
.text:hover {
  opacity: 0.5;
}
@media only screen and (max-width: 600px){
	/*Big smartphones [426px -> 600px]*/
  .container{
    display:flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }
}

.icons{
  display: flex;
  flex-direction: row;
  font-size: 40px;
  flex-wrap: wrap;
  gap:10px;
  padding-top: 12px;
}
i:hover{
  background-color: rgb(24, 50, 111);

}
#about-pic{
  padding-top: 10px;
  padding-bottom: 10px;
}
h1 {
    padding-top: 5px;
} 


  
</style>