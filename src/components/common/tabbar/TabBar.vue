<template>
  <div id="app">
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>
  #tab-bar{
    display: flex;
    background-color: #f0f0f0;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -2px 2px rgba(100,100,100,.1);
  }

</style>
