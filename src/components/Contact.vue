<template>
  <div class="contact">
    <div class="limiter">

      <div class="top">
        <div class="header">Contact Me</div>
        <div class="line"></div>
      </div>

      <div class="sending-box" v-if="sending || sent || sentError">
        <div class="sk-chase" v-if="sending">
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
        </div>
        <div class="box" v-if="sent">
          <span>Message Sent</span>
          <font-awesome-icon :icon="['fas', 'check-circle']" class="icon green"/>
        </div>
        <div class="box" v-if="sentError">
          <span>Sending Error</span>
          <font-awesome-icon :icon="['fas', 'exclamation-circle']" class="icon red"/>
        </div>
        <div class="error-message" v-if="sentError">Invalid E-mail address</div>
      </div>

      <div class="main-box" v-if="!sending && !sent && !sentError">
        <div class="left-box">
          <div class="input-box">
            <div class="label">Name</div>
            <input type="text" v-model="name" :class="{ error: nameError }" @change="nameError = false"> 
          </div>
          <div class="input-box">
            <div class="label">E-mail</div>
            <input type="text" v-model="email" :class="{ error: emailError }" @change="emailError = false">
          </div>
          <div class="input-box">
            <div class="label">Subject</div>
            <input type="text" v-model="subject" :class="{ error: subjectError }" @change="subjectError = false">
          </div>
        </div>
        <div class="right-box">
          <div class="input-box">
            <div class="label">Message</div>
            <textarea name="message" v-model="message" :class="{ error: messageError }" @change="messageError = false"></textarea>
          </div>
          <div class="button-box">
            <div class="error-box" v-show="nameError || emailError || subjectError || messageError">
              <font-awesome-icon :icon="['fas', 'exclamation-circle']" />
              <span>Fill in the blanks</span>
            </div>
            <button @click="sendMessage">Send Message</button>
          </div>
        </div>
      </div>

      <div class="bottom"></div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      nameError: false,
      email: '',
      emailError: false,
      subject: '',
      subjectError: false,
      message: '',
      messageError: false,
      sending: false,
      sent: false,
      sentError: false
    }
  },
  methods: {
    checkName() {
      if(this.name.trim() == '') {
        this.nameError = true;
        return false;
      } else {
        return true;
      }
    },
    checkEmail() {
      if(this.email.trim() == '') {
        this.emailError = true;
        return false;
      } else {
        return true;
      }
    },
    checkSubject() {
      if(this.subject.trim() == '') {
        this.subjectError = true;
        return false;
      } else {
        return true;
      }
    },
    checkMessage() {
      if(this.message.trim() == '') {
        this.messageError = true;
        return false;
      } else {
        return true;
      }
    },
    clear() {
      this.name = '';
      this.email = '';
      this.subject = '';
      this.message = '';
      this.sending = false;
      this.sent = false;
      this.sentError = false;
    },
    sendMessage() {
      const nameStatus = this.checkName();
      const emailStatus = this.checkEmail();
      const subjectStatus = this.checkSubject();
      const messageStatus = this.checkMessage();

      if(nameStatus && emailStatus && subjectStatus && messageStatus) {
        this.sending = true;
        axios.post('https://cholodymedia-bot.herokuapp.com/cholodymedia-bot', {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        })
        .then(() => {
          this.sending = false;
          this.sent = true;
          setTimeout(this.clear, 3000);
        })
        .catch(err => {
          this.sending = false;
          this.sentError = err.response.data.message;
          setTimeout(() => {
            this.sentError = false;
          }, 4000);
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  width: 100%;
  height: auto;
  background-color: #333533;
  display: flex;
  justify-content: center;
}

.limiter {
  width: 41rem;
  height: auto;
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
    height: 7rem;
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

  .sending-box {
    width: 100%;
    height: 22rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 700px) {
      height: 44rem;
    }

    .box {
      width: 20rem;
      height: 5rem;
      color: white;
      border-radius: 0.3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.8rem;
      font-weight: 600;
      animation: popUp 0.2s forwards ease-in;

      .icon {
        margin-left: 0.5rem;
      }
      .green {
        color: #5bc0be;
      }
      .red {
        color: #c05b6c;
      }
    }

    .error-message {
      width: 20rem;
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.3rem;
      color: #c05b6c;
      animation: popUp 0.2s forwards ease-in;
    }

    @keyframes popUp {
      0%{
        transform: scale(0.5);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
  }

  .main-box {
    width: 100%;
    height: 22rem;
    display: flex;

    @media (max-width: 700px) {
      height: 44rem;
      flex-direction: column;
    }

    .left-box {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;

      @media (max-width: 700px) {
        width: 100%;
      }

      .input-box {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;

        .label {
          width: 90%;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          color: rgba(255, 255, 255, 0.658);
          font-weight: 100;

          @media (max-width: 700px) {
            width: 100%;
          }
        }

        input {
          width: 90%;
          height: 3rem;
          background: none;
          outline: none;
          border: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.658);
          color: white;
          font-size: 1rem;

          @media (max-width: 700px) {
            width: 100%;
          }

          &:focus {
            border-bottom: 1.5px solid #5bc0be;
          }
        }

        .error {
          border-bottom: 1.5px solid #c05b6c;
        }
      }
    }
    .right-box {
      width: 50%;
      height: 100%;
      display: flex;
      flex-direction: column;

      @media (max-width: 700px) {
        width: 100%;
      }

      .input-box {
        width: 100%;
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .label {
          width: 100%;
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          color: rgba(255, 255, 255, 0.658);
          font-weight: 100;
        }

        textarea {
          width: 100%;
          height: 9.6rem;
          background: none;
          background-color: #24242354;
          outline: none;
          border: none;
          border-radius: 0.3rem;
          color: white;
          font-size: 1rem;
          resize: none;
          padding: 1rem;

          &:focus {
            border: 1.5px solid #5bc0be;
          }
        }

        .error {
          border: 1.5px solid #c05b6c;
        }
      }

      .button-box {
        width: 100%;
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        
        .error-box {
          width: 100%;
          height: 3rem;
          margin-bottom: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #c05b6c;

          span {
            margin-left: 0.5rem;
          }
        }

        button {
          width: 18rem;
          height: 3rem;
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

          @media (max-width: 350px) {
            width: 100%;
          }

          &::before {
            position: absolute;
            content: '';
            width: 0rem;
            height: calc(3rem - 4px);
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
              width: calc(18rem - 4px);
            }
          }
        }
      }
    }
  }

  .bottom {
    width: 100%;
    height: 7rem;

    @media (max-width: 700px) {
      height: 5rem;
    }
  }
}

// Sending Circle
.sk-chase {
  width: 60px;
  height: 60px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; 
  animation: sk-chase-dot 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: #5bc0be;
  border-radius: 100%;
  animation: sk-chase-dot-before 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes sk-chase {
  100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot {
  80%, 100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
}
</style>