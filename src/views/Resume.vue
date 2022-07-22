<template >
  <div id="container-card">
    <div class="cards shadow-sm p-3 mb-5 bg-white rounded" v-for="(resume, index) in getResumes" :key="index">
    <box-icon name='chevrons-down' ></box-icon>
     <h3>~{{resume.date}}~</h3> {{resume.text}} <br> ||{{resume.location}} ||<br> 

</div></div>


    

</template>
<script>
export default {
    computed:{
        getResumes(){
            return this.$store.state.resumes
        }
    }
}
</script>
<style scoped>
h3{
    font-size: 30px;
    font-style: italic;
    padding-top: 20px;
    text-shadow: black;
}
#container-card{
    background-color: rgb(197, 206, 222);
}
.cards{
    background-color: sandybrown;
}

    
</style>