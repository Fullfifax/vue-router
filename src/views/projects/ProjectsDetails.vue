<template>
    <p class="p-id">The project id is {{ id }}</p>
</template>

<script>
export default {
    props:['id', 'type']
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
.p-id {
    text-align: center;
}
</style>