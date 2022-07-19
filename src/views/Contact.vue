<template lang="">
  <div class="container">
   <h1>Hello </h1>
   <form>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="name" class="form-control">
     
     <h4 class="mt-3">Address</h4>
    <input type="street" class="form-control">
     <label for="street name">Street Address</label>
    <input type="name" class="form-control">
     <label for="street">Street Address Line 2</label>
    <input type="street name" class="form-control">
     <label for="name">City</label>
    <input type="name" class="form-control">
  
    </div>
  
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Submit when you are done.</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

    
  </div>
</template>
<script>
export default {
    
}
</script>
<style>
form{
background: rgba( 16, 14, 14, 0.35 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 11px );
-webkit-backdrop-filter: blur( 11px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
}
input{
  width:50%;
}
   
</style>