<template>
<div id="app">
  <BabylonExamples2 />
</div>  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BabylonExamples2 from './components/BabylonExamples2.vue';

export default defineComponent({
  name: 'App',
  components: {
    BabylonExamples2
  }
});
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* background-image: url("../public/images/Background_Dots.png");
  background-size: cover;
  background-position: center;
  padding: 2rem; */
}
</style>
