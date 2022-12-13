<template>
    <p>The project id is {{ id }}</p>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>

<style>
</style>