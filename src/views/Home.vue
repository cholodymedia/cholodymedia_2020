<template>
  <div class="home">
    <Start/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Start from '@/components/Start'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Start,
    About,
    Projects,
    Contact,
    Footer
  },
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables.scss';
//Home
.home {
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #242423;
}
</style>