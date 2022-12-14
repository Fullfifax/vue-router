<template>
    <div class="projects" v-for="project in projects" :key="project.id">
        <h2>
            <router-link :to="{ name: 'ProjectDetails', params: { id: project.id } }">{{ project.type }}</router-link>  
        </h2>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: []
        }
    },
    mounted() {
        fetch('http://localhost:3000/projects')
            .then(res => res.json())
            .then(data => this.projects = data)
            .catch(err => console.log(err.message))
    }
}
</script>

<style>
.projects {
    padding: 0.2em;
}
.projects h2 a {
    background-color: #582aad;
    border-radius: 12px;
    color: white;
    cursor: pointer;
    padding: 0.5em 1.2em;
    text-align: center;
    text-decoration: none;
}
.projects h2 a:hover {
    opacity: 0.7;
}
</style>