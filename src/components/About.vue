<template>
  <div class="about">
    <div class="center-box">
      <div class="image-box">
        <img src="@/assets/images/profile-mini.png">
      </div>
      <div class="content-box">
        <div class="big">About Me</div>
        <div class="line"></div>
        <div class="text">
          My name is Marcin. I am a graduate of the best IT technical school in Poland (or so they say). Programming is my passion and a way to express myself.
        </div>
        <button @click="goToContact">Contact me</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  methods: {
    goToContact() {
      document.querySelector('.contact').scrollIntoView();
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 25rem;
  background-color: #333533;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 700px) {
    height: 40rem;
  }

  .center-box {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;

    @media (max-width: 700px) {
      flex-direction: column;
    }
    @media (max-width: 450px) {
      width: 85%;
    }
  }

  .image-box {
    width: 15rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 700px) {
      width: 13rem;
    }
    @media (max-width: 300px) {
      width: 10rem
    }
    @media (max-width: 200px) {
      width: 100%;
      justify-content: center;
    }

    img {
      width: 15rem;
      border-radius: 100%;
      @media (max-width: 700px) {
        width: 13rem;
      }
      @media (max-width: 300px) {
        width: 10rem
      }
      @media (max-width: 200px) {
        width: 90%;
      }
    }
  }

  .content-box {
    width: 25rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 6rem;

    @media (max-width: 800px) {
      margin-left: 3rem;
    }
    @media (max-width: 750px) {
      margin-left: 2rem;
    }
    @media (max-width: 700px) {
      margin-left: 0rem;
      margin-top: 2rem;
    }
    @media (max-width: 450px) {
      width: 100%
    }

    .big {
      color: white;
      font-size: 1.8rem;
      font-weight: 500;
      @media (max-width: 210px) {
        font-size: 15vw;
      }
    }

    .line {
      width: 4rem;
      height: 0.15rem;
      margin-top: 0.4rem;
      background-color: #5bc0be;
      @media (max-width: 210px) {
        width: 30vw;
      }
    }

    .text {
      margin-top: 1.3rem;
      width: 25rem;
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 0.01rem;
      line-height: 1.4rem;
      color: rgba(255, 255, 255, 0.548);

      @media (max-width: 450px) {
        width: 100%
      }
      @media (max-width: 210px) {
        font-size: 8vw;
      }
    }

    button {
      margin-top: 1.5rem;
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

      @media (max-width: 150px) {
        width: 80vw;
        height: 30vw;
        font-size: 9vw;
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
        @media (max-width: 150px) {
          height: calc(30vw - 4px);
        }
      }

      &:hover {
        cursor: pointer;
        color: white;

        &::before {
          width: calc(8rem - 4px);
          @media (max-width: 150px) {
            width: calc(80vw - 4px);
          }
        }
      }
    }
  }
}
</style>