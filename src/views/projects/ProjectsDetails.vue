<template>
    <div class="projects-details" v-if="project">
        <h1>{{ project.type }} ;)</h1>
        <div class="projects-title">
            <h2 class="p-id" v-for="prjct in project.names">
                {{ prjct }}
            </h2>
        </div>
    </div>
    <div v-else>
        <h2 class="wait">Please wait ...</h2>
    </div>
</template>

<script>
export default {
    props:['id'],
    data() {
        return {
            project: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/projects/' + this.id)
            .then(res => res.json())
            .then(data => this.project = data)
            .catch(err => console.log(err.message))
    }
    /*
    data() {
        return {
            id: this.$route.params.id
        }
    }
    */
}
</script>

<style>
.projects-details {
    background-color: #582aad;
    color: white;
    padding: 12px;
    text-align: center;
}
.projects-title {
    color: white;
    display: flex;
    justify-content: space-around;
}
.wait {
    text-align: center;
}
</style>