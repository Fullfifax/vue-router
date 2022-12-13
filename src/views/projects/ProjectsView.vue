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
            projects: [
                {
                    id: 1, 
                    type: 'Desktop application'
                },
                {
                    id: 2,
                    type: 'Web'
                },
                {
                    id: 3,
                    type: 'Mobile application'
                }
            ]
        }
    }
}
</script>

<style>
.projects {
    padding: 0.2em;
}
.projects h2 a {
    background-color: #428a4b;
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