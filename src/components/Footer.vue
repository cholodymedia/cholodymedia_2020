<template>
  <footer>
    <span>© Copyright 2020 cholodymedia</span>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #242423;
  color: rgba(255, 255, 255, 0.658);
  font-weight: 100;

  @media (max-width: 350px) {
    font-size: 4.5vw;
  }
}
</style>