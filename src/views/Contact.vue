<template >
 <form  action="https://formspree.io/f/xvolwzyz"
  method="POST">
  <h3>Nice to meet you</h3>
<input placeholder="Name"   name="name" class="input" required="">
<input placeholder="Surname"  name="Surname" class="input" required="">
<input placeholder="Email"   name="email" class="input" required="">
<input placeholder="Phone number" name="Phone number" class="input" required="">
<input placeholder="Location" name="Location" class="input" required="">
Send me some text
 <textarea name="message"></textarea>

<button type="submit"> Submit
</button>

</form>
<!-- <footer /> -->
</template>
<script>
export default {
  
}
</script>
<style scoped>
/* From uiverse.io by @alexruix */
/* From uiverse.io by @alexruix */
.input {
 line-height: 28px;
 border: 2px solid transparent;
 border-bottom-color: #777;
 padding: .2rem 0;
 outline: none;
 background-color: transparent;
 color: #0d0c22;
 transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.input:focus, input:hover {
 outline: none;
 padding: .2rem 1rem;
 border-radius: 1rem;
 border-color: #064ca0;
}

.input::placeholder {
 color: #777;
}

.input:focus::placeholder {
 opacity: 0;
 transition: opacity .3s;
}
form{
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: center;
  align-self: center;
  width: 50%;
  align-items: center;
  gap:20px;
  margin:auto;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 20px;

  border-radius: 10%;
  background-image: linear-gradient( 109.5deg,  rgba(76,221,242,1) 11.2%, rgba(92,121,255,1) 91.1% );
}
/* From uiverse.io */
button {
  padding: 1.3em 3em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color: #c4c423;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

button:active {
  transform: translateY(-1px);
}
  
</style>