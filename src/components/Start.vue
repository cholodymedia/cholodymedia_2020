<template>
  <div class="start">
    <div class="logo-mini">
      <img src="@/assets/logo/logo-light-mini.png">
    </div>
    <div class="logo">cholodymedia</div>
    <div class="links">
      <div class="mini-logo">
        <img src="@/assets/logo/logo-dark-mini.png">
      </div>
      <a href="https://github.com/cholodymedia" class="link" target="blank">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
    <div class="left">
      <div class="content-box">
        <span class="small">Hello World</span>
        <span class="big">I'm Marcin</span>
        <span class="medium">Vue.js & Node.js <br> Developer</span>
        <button @click="goToProjects">Projects</button>
      </div>
    </div>
    <div class="right">
      <img src="@/assets/logo/logo-dark-mini.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  methods: {
    goToProjects() {
      document.querySelector('.projects').scrollIntoView();
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100;200;300;400;500;600;700;800;900&display=swap');
.start {
  width: 100%;
  height: 40rem;
  display: flex;
  background-color: #242423;
  overflow: hidden;

  @media (max-width: 450px) {
    height: 100vh;
  }

  .logo {
    position: absolute;
    top: 1.5rem;
    left: 2rem;
    color: #e8eddf;
    font-family: MuseoModerno;
    font-size: 1.2rem;

    @media (max-width: 450px) {
      left: 5rem;
      top: 2rem;
    }
    @media (max-width: 250px) {
      display:none;
    }
  }

  .logo-mini {
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 1.5rem;
    left: 2rem;
    color: #e8eddf;
    font-family: MuseoModerno;
    font-size: 1.2rem;
    display: none;

    @media (max-width: 450px) {
      display: flex;
      top: 2rem;
    }

    @media (max-width: 200px) {
      left: 10%;
      width: 15vw;
      height: 15vw;
    }

    img {
      width: 100%
    }
  }

  .links {
    position: absolute;
    right: 2rem;
    top: 1.4rem;
    width: auto;
    height: 2.5rem;

    @media (max-width: 600px) {
      top: unset;
      width: 15%;
      height: 40rem;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 1rem;
      padding-top: 1.3rem;
    }

    @media (max-width: 450px) {
      bottom: 2rem;
      right: 1rem;
      width: auto;
      height: auto;
      flex-direction: unset;
      align-items: unset;
      padding-bottom: unset;
      padding-top: unset;
    }

    @media (max-width: 200px) {
      right: 10%;
    }

    a {
      text-decoration: none;
      color: #333533;
      @media (max-width: 450px) {
        color:rgba(255, 255, 255, 0.486);
      }
    }

    .link {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.8rem;

      @media (max-width: 600px) {
        margin-top: auto;
      }

      @media (max-width: 200px) {
        width: 15vw;
        height: 15vw;
        font-size: 14vw;
      }
    }

    .mini-logo {
      width: 2.5rem;
      height: 2.5rem;
      display: none;
      justify-content: center;
      align-items: center;
      @media (max-width: 600px) {
        display: flex;
      }
      @media (max-width: 450px) {
        display: none;
      }

      img {
        width: 2rem;
      }
    }
  }

  .left {
    width: 60%;
    height: 100%;
    background-color: #242423;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
      width: 85%;
    }
    @media (max-width: 450px) {
      width: 100%;
    }

    .content-box {
      width: 15rem;
      height: 15rem;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;

      @media (max-width: 450px) {
        width: 60%;
      }
      @media (max-width: 350px) {
        width: 80%;
      }

      .small {
        color: rgba(255, 255, 255, 0.842);
        font-size: 1rem;
        @media (max-width: 260px) {
          font-size: 6vw;
        }
      }

      .medium {
        color: rgba(255, 255, 255, 0.842);
        font-size: 1.2rem;
        line-height: 1.6rem;
        @media (max-width: 260px) {
          font-size: 7vw;
          line-height: 10vw;
        }
      }

      .big {
        color: #5bc0be;
        font-size: 2.5rem;
        font-weight: bold;
        margin-top: 0.2rem;
        margin-bottom: 0.5rem;
        @media (max-width: 260px) {
          font-size: 15vw;
        }
      }

      button {
        margin-top: 2rem;
        width: 8rem;
        height: 2.5rem;
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 0.1rem;
        color: #5bc0be;
        background: none;
        outline: none;
        border: 2px solid #5bc0be;
        border-radius: 0.2rem;
        z-index: 0;
        position: relative;
        transition: 0.3s;

        @media (max-width: 260px) {
          width: 50vw;
          height: 16vw;
          font-size: 6vw;
          margin-top: 13vw;
        }

        &::before {
          position: absolute;
          content: '';
          width: 0rem;
          height: calc(2.5rem - 4px);
          background-color: #5bc0be;
          z-index: -1;
          left: 0;
          top: 0;
          transition: 0.3s;
        }

        &:hover {
          cursor: pointer;
          color: white;

          &::before {
            width: calc(8rem - 4px);
          }
        }
      }
    }
  }

  .right {
    width: 40%;
    height: 100%;
    background-color: #5bc0be;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
      width: 15%;
    }

    @media (max-width: 450px) {
      display: none;
    }

    img {
      width: 16rem;
      height: 16rem;
      @media (max-width: 1000px) {
        width: 12rem;
        height: 12rem;
      }
      @media (max-width: 800px) {
        width: 10rem;
        height: 10rem;
      }
      @media (max-width: 600px) {
        display: none;
      }
    }
  }
}
</style>