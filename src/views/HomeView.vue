<template lang="">

   <section class="landing">
    
  <div class="content " >
    <h2>Lunga</h2>
    <h2>Lunga</h2>
  </div>
</section>

    
</template>
<script>
export default {
  
}
</script>
<style >
@import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
   font-family:serif;
}

.landing {
  display: flex;
  /* background: #000; */
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  background-image:url(https://i.postimg.cc/XJ7c9bXT/King.jpg);
  background-position: center;
  background-attachment:fixed;
  background-repeat: no-repeat;

}

.content {
  position: relative;
}

.content h2 {
  color: rgb(0, 0, 0);
  font-size: 8em;
  position: absolute;
  transform: translate(-50%, -50%);
  
}

.content h2:nth-child(1) {
  color: transparent;
  -webkit-text-stroke: 2px #121111;
}

.content h2:nth-child(2) {
  color: #0b0b0b;
  animation: animate 4s ease-in-out infinite;
}

@keyframes animate {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      16% 44%,
      33% 50%,
      54% 60%,
      70% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }

  50% {
    clip-path: polygon(
      0% 60%,
      15% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}
  
</style>