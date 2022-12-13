<template>
    <div class="cards">
        <h2 v-for="project in projects" :key="project.id">
            {{ project.type }}
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
.cards {
    display: flex;
    justify-content: space-around;
}
</style>