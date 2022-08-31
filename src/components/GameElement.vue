<template>
  <div class="body">
    <header class="container">
      <h3>Guess My Number!</h3>
      <p class="between">(Between 1 and 20)</p>
      <button class="btns again" @click="again()">Again!</button>
      <div class="number">?</div>
    </header>
    <main class="d-flex flex-column flex-sm-row">
      <section class="left">
        <input type="number" class="guess" />
        <button class="btns check" @click="checks()">Check!</button>
      </section>
      <section class="right">
        <p class="message">Start guessing...</p>
        <p class="label-score">💯 Score: <span class="score">20</span></p>
        <p class="label-highscore">
          🥇 Highscore: <span class="highscore">0</span>
        </p>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name: "GameElement",

  data: function () {
    return {
      secretNumber: Math.trunc(Math.random() * 20) + 1,

      realScore: 20,

      highscore: 0,

      displayMessage: function (message) {
        document.querySelector(".message").textContent = message;
      },
      displayScore: function (score) {
        document.querySelector(".score").textContent = score;
      },
    };
  },

  methods: {
    checks() {
      const guess = Number(document.querySelector(".guess").value);
      console.log(guess);

      //if no INPUT
      if (!guess) {
        /* document.querySelector('.message').textContent = '🛑 NO NUMBER!'; */
        this.displayMessage("🛑 NO NUMBER!");
        //WHEN PLAYER WIN
      } else if (guess === this.secretNumber) {
        if (this.realScore > 1) {
          /*  document.querySelector('.message').textContent = '🥳 Correct Number!'; */
          this.displayMessage("🥳 Correct Number!");
          document.querySelector(".body").style.backgroundImage =
            "linear-gradient(-60deg, #ff5858 0%, #f09819 100%)";
          document.querySelector(".number").style.width = "30rem";
          document.querySelector(".number").textContent = this.secretNumber;

          if (this.realScore > this.highscore) {
            this.highscore = this.realScore;
            document.querySelector(".highscore").textContent = this.highscore;
          }

          // IF PLAYER TRY TO GET WINNER NUMBER AFTER LOSE
        } else {
          /*  document.querySelector('.message').textContent =
        '☠️ NOPE YOU HAVE ALREADY LOST THE GAME '; */
          this.displayMessage("☠️ NOPE YOU HAVE ALREADY LOST THE GAME ");
          /* document.querySelector('.score').textContent = 0; */
          this.displayScore(0);
        }

        //WHEN WRONG NUMBER
      } else if (guess !== this.secretNumber) {
        if (this.realScore > 1) {
          /*  document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High!' : '📉 Too low!'; */
          this.displayMessage(
            guess > this.secretNumber ? "📈 Too High!" : "📉 Too low!"
          );
          this.realScore--;
          document.querySelector(".score").textContent = this.realScore;
        } else {
          /*   document.querySelector('.message').textContent = '☠️ YOU LOST THE GAME '; */
          this.displayMessage("☠️ YOU LOST THE GAME ");
          /*  document.querySelector('.score').textContent = 0; */
          this.displayScore(0);
        }
      }
    },

    again() {
      this.realScore = 20;
      this.secretNumber = Math.trunc(Math.random() * 20) + 1;
      console.log(this.secretNumber);
      document.querySelector(".score").textContent = this.realScore;
      /*   document.querySelector('.message').textContent = 'Start guessing...'; */
      this.displayMessage("Start guessing...");
      document.querySelector(".body").style.backgroundImage =
        " linear-gradient(to right, #434343 0%, black 100%)";
      document.querySelector(".number").style.width = "8rem";
      document.querySelector(".number").textContent = "?";
      document.querySelector(".guess").value = "";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Press+Start+2P&display=swap");

.body {
  font-family: "Press Start 2P", sans-serif;
  color: #eee;
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  width: 100%;
  /* background-color: #60b347; */
}

/* LAYOUT */
header {
  position: relative;
  height: 35vh;
  border-bottom: 7px solid #eee;
}

main {
  height: 65vh;
  color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.left {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right {
  width: 100%;
  /*  font-size: 1.5rem; */
}

/* ELEMENTS STYLE */
h3 {
  text-align: center;
  position: absolute;
  width: 100%;
  top: 52%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.number {
  background: #eee;
  color: #333;
  font-size: 2rem;
  width: 8rem;
  padding: 0.5rem 0rem;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}

.between {
  font-size: 1rem;
  position: absolute;
  top: 1rem;
  right: 2rem;
}

.again {
  position: absolute;
  top: 1rem;
  left: 2rem;
}
@media screen and (max-width: 480px) {
  .between {
    position: relative;
    display: flex;
    justify-content: center;
    top: 2;
    left: 0;
  }
  .again {
    position: relative;
    display: flex;
    top: 2;
    left: 30%;
  }
}

.guess {
  background: none;
  border: 4px solid #eee;
  font-family: inherit;
  color: inherit;
  font-size: 3rem;
  padding: 2rem;
  width: 18rem;
  text-align: center;
  display: block;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.btns {
  border: none;
  background-color: #eee;
  color: rgb(77, 77, 77);
  font-size: 1rem;
  font-family: inherit;
  padding: 0.3rem 1rem;
  cursor: pointer;
}

.btn:hover {
  background-color: #ccc;
}

.message {
  margin-bottom: 2rem;
  height: 3rem;
}

.label-score {
  margin-bottom: 2rem;
}
</style>
