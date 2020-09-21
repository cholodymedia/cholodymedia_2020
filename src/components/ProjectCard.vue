<template>
  <div class="card" :style="{ backgroundColor: bgColor }">
    <div class="background-image">
      <img :src='getImage'>
    </div>
    <div class="content-overlay">
      <div class="name-row">
        <div class="icon">
          <img :src='getLogo'>
        </div>
        <div class="name">{{ name }}</div>
      </div>
      <div class="describ">{{ description }}</div>
      <div class="links">
        <a :href="github" target="blank" v-if="github">
          <div class="github link"><font-awesome-icon :icon="['fab', 'github']" /></div>
        </a>
        <a :href="website" target="blank" v-if="website">
          <div class="website link"><font-awesome-icon icon="globe-europe" /></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    bgColor: String,
    bgImage: String,
    logo: String,
    name: String,
    description: String,
    website: String,
    github: String
  },
  computed: {
    getImage() {
      return require(`@/assets/pages/${this.bgImage}`);
    },
    getLogo() {
      return require(`@/assets/projects-logos/${this.logo}`);
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 20rem;
  height: 13rem;
  border-radius: 0.3rem;
  position: relative;
  user-select: none;
  overflow: hidden;

  @media (max-width: 700px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 90%;
    height: 15rem;
  }

  @media (max-width: 450px) {
    width: 95%;
  }

  &:hover {
    .content-overlay {
      .name-row {
        margin-top: -3rem;
      }
      .links {
        .link {
          transform: scale(1);
        }
      }
    }
  }

  .background-image { 
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    img {
      width: 100%;
      height: 100%;
      filter: grayscale(1);
      opacity: 0.3;
    }
  }

  .content-overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 3rem;
    padding-right: 3rem;

    @media (max-width: 450px) {
      padding-left: 2rem;
      padding-right: 2rem;
    }
    @media (max-width: 350px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .name-row {
      width: 100%;
      height: 3rem;
      display: flex;
      margin-top: -0.5rem;
      transition: 0.3s;

      .icon {
        width: 3rem;
        height: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          height: 2rem;
        }
      }

      .name {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: 0.5rem;
        color: white;
        font-size: 1.5rem;
        font-weight: 500;

        @media (max-width: 350px) {
          font-size: 1.3rem;
        }
        @media (max-width: 300px) {
          font-size: 7vw;
        }
      }
    }

    .describ {
      color: white;
      font-size: 1rem;
      font-weight: 100;
      margin-top: 0.5rem;
      opacity: 0.8;
      line-height: 1.3rem;
    }

    .links {
      min-width: 2.5rem;
      width: auto;
      height: 2.5rem;
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      display: flex;

      .link {
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 1.5rem;
        transition: 0.3s;
        transform: scale(0);

        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>