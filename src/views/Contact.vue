<template >
<div id="container">
<form action = "https://formspree.io/f/xvolwzyz">
  <input placeholder="Name"   name="name" class="input" required="">
<input placeholder="Surname"  name="Surname" class="input" required="">
<input placeholder="Email"   name="email" class="input" required="">
<input placeholder="Phone number" name="Phone number" class="input" required="">
<input placeholder="Location" name="Location" class="input" required="">
<div>
<button type="submit"> Button
</button>
</div>
</form>
<Footer />
</div>
</template>
<script>
import Footer from "../components/Footer.vue"
export default {
   components: {
    Footer,
   }
}
</script>
<style scoped>
  form{
    display: flex;
    flex-direction: column;
    margin: auto;
    left: 0;
    right: 0;
    width: 70%;
    height: 70%;
    margin-top: 20px;
    margin-bottom: 30px;
    position: absolute;
   background-image: radial-gradient(54% 54%,#0000 98%,#c39f76);
  background-size: 100px 100px
  }
  .input {
 background-color: #383838;
 border: 1ex solid none;
 border-top-width: 1.7em;
 margin: auto;
 padding: 0;
 color: #383838;
 word-wrap: break-word;
 outline: 7px solid #383838;
 height: 30px;
 font-size: 25px;
 text-align: center;
 transition: all 1s;
 max-width: 190px;
 font-weight: bold;
 font-family: 'Courier New', Courier, monospace;
}

.input:hover {
 border-top-width: 0.2em;
 background-color: #f1e8e8;
}

.input:focus {
 border-top-width: 0.2em;
 background-color: #f1e8e8;
}
#container{
  gap: 30px;
  margin-top: 40px;
  display: flex;
}

button {
 color: #090909;
 padding: 0.7em 1.7em;
  border-radius: 0.5em;
 background: #e8e8e8;
 border: 1px solid #e8e8e8;
 transition: all .3s;
 box-shadow: 6px 6px 12px #717171,
             -6px -6px 12px #d0cccc;
             
}

button:hover {
 border: 1px solid white;
}

button:active {
 box-shadow: 4px 4px 12px #c5c5c5,
             -4px -4px 12px #ffffff;
}

</style>