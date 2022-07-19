<template lang="">
<h1>About Me</h1>

  <div class="container fluid">
  <div class="row gx-1 about shadow p-3 mb-5 bg-white rounded row">

    <div class="col-md-3">  <p class="text">Hi I am Lunga Booi
Full Stack Developer

I am a curious person who loves reading and understanding the content from the roots.
I became interested in coding when I did personal research about it.
My favourite languages are Python and JavaScript. I spend half of my time coding on my computer.
My passion is to design and develop web applications.</p>
      

    </div></div>

    <div class="col-md-3">
    <img src="https://i.postimg.cc/rshkbdbJ/9-BF3-E51-D-57-C5-49-C6-BA88-AE494436-B96-B.jpg" style="width: 280px" alt="" /></div>

    </div>


 
</template>
<script>
export default {
  
}
</script>
<style >
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
  
}
img:hover {
  opacity: 0.5;
}
.text:hover {
  opacity: 0.5;
}


  
</style>