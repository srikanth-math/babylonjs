<template>

<div>
  <h1>Babylon Standard Materials</h1>
  <canvas></canvas>
</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { StandardMaterials } from '@/BabylonExamples/StandardMaterials';

export default defineComponent({
  name: 'BabylonExamples',
  mounted(){
    const canvas=document.querySelector("canvas")!;
    new StandardMaterials(canvas);
  }
  
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width:70%;
  height:70%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:none;
}
h1 {
  color:white;
  background:none;
  margin-bottom:1rem;
}
canvas {
  width:100%;
  height:100%;
  border:none;
  outline:none;
  box-shadow:8px 8px 10px -6px #000000;
}
</style>
