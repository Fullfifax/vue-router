<template>
  <nav>
    <div class="nav-left">
      <h2>Fullfifax</h2>
    </div>
    <div class="nav-right">
      <router-link :to="{ name:'HomeView' }">Home</router-link>
      <router-link :to="{ name: 'AboutView' }">About</router-link>
      <router-link :to="{ name: 'ExperiencesView' }">Experiences</router-link>
      <router-link :to="{ name: 'ProjectsView' }">Projects</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  align-items: center;
  background-color: transparent;
  color: #2c3e50;
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
}

nav a {
  color: #2c3e50;
  font-weight: bold;
  margin-right: 1em;
  text-decoration: none;
}
nav a.router-link-exact-active {
  background-color: #582aad;
  color: white;
  padding: 12px 16px;
}
nav a:hover {
  background-color: #582aad;
  color: white;
  opacity: 0.5;
  padding: 12px 16px;
}
.nav-left h2 {
  color: #582aad;
}
</style>
