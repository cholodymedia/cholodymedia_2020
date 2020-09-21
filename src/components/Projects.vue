<template>
  <div class="projects">
    <div class="limiter">
      <div class="top">
        <div class="header">Projects</div>
        <div class="line"></div>
      </div>
      <div class="main-box">
        <div class="row">
          <ProjectCard bgColor="#06d6a0" bgImage="frogero-page.png" name="Frogero" logo="frogero.png" description="Online platform for training speaking in foreign languages." website="https://www.frogero.com/"/>
          <ProjectCard bgColor="#343a40" bgImage="easy-page.png" name="Easy-Analytics" logo="easy.png" description="App with basic analytics for your website." website="https://easy-analytics.netlify.app/"/>
        </div>
        <div class="row">
          <ProjectCard bgColor="#b76801" bgImage="poten-page.png" name="Potencjałometr" logo="meter.png" description="Interactive test of professional predispositions. Made as a school project." website="http://p.staff.edu.pl/"/>
          <ProjectCard bgColor="#e76f51" bgImage="frogero-page.png" name="Debug JS" logo="debugjs.png" description="A JS script that shows borders of website elements made to help build websites from scratch." website="https://cholodymedia.github.io/debug/" github="https://github.com/cholodymedia/debug"/>
        </div>
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard'

export default {
  name: 'Projects',
  components: {
    ProjectCard
  }
}
</script>

<style lang="scss" scoped>
.projects {
  width: 100%;
  height: auto;
  background-color: #242423;
  display: flex;
  justify-content: center;
}

.limiter {
  width: 41rem;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (max-width: 700px) {
    width: 90%;
  }

  @media (max-width: 450px) {
    width: 85%;
  }


  .top {
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    .header {
      color: white;
      font-size: 1.8rem;
      font-weight: 500;
    }

    .line {
      width: 4rem;
      height: 0.15rem;
      margin-top: 0.6rem;
      background-color: #5bc0be;
    }
  }

  .main-box {
    width: 100%;
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 2rem;

    .row {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      @media (max-width: 700px) {
        flex-direction: column;
        align-items: center;
      }

      &:nth-of-type(2) {
        margin-top: 1rem;
        @media (max-width: 700px) {
          margin-top: unset;
        }
      }
    }
  }

  .bottom {
    width: 100%;
    height: 8rem;
  }
}
</style>