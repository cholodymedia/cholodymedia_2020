<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/styles/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Rubik;
  scroll-behavior: smooth;
}
#app {
  width: 100%;
  height: auto;
  display: flex;
}

::-webkit-scrollbar {
  width: 8px;
  background: #242423;
}
::-webkit-scrollbar-thumb {
  background: #333533;
  border-radius: 10px;
}
</style>
