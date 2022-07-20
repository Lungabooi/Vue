<template >
    <div class="home">
    <div v-for="(project, index) in getprojects" :key="index">
    <span>{{project.id}} {{project.name}}</span>
    <h5>Projects Page</h5>
</div>
</div>
</template>
<script>
export default {
  name: 'HomeView',
  computed: {
    getProjects() {
      return this.$store.state.projects
    }
  },
}

</script>
<style >
    
</style>