<template>
  <nav>
    <router-link to="/">ToDo-list</router-link> |
    <router-link to="/calendar">Calendar</router-link> | 
    <router-link to="/crypto-exchanger">Crypto-Exchanger</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  position: fixed;
  top: 0;
  background-color: transparent;
  padding: 30px;
  width: 100%;
  
  

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>