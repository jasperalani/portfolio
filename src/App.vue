<template>
  <div id="app">
    <Logo />
    <RepoList />
  </div>
</template>

<script>
import RepoList from './components/RepoList.vue'
import Logo from './components/Logo.vue'

export default {
  name: 'App',
  components: {
    RepoList,
    Logo
  },
}
</script>

<style>

@font-face {
  font-family: "Source Code Pro";
  src: url("./assets/fonts/SourceCodePro-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Source Code Pro";
  src: url("./assets/fonts/SourceCodePro-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Source Code Pro";
  src: url("./assets/fonts/SourceCodePro-Italic.ttf") format("truetype");
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: "Source Code Pro";
  src: url("./assets/fonts/SourceCodePro-Light.ttf") format("truetype");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "Source Code Pro";
  src: url("./assets/fonts/SourceCodePro-Black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: grey;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
