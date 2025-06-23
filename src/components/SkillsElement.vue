<template>
  <div id="skills" class="p-5 bg-custom cyber-section" data-aos="fade-up">
    <h2 class="display-3 fw-bold text-white">Skills</h2>
    <div class="container bg-custom2">
      <div class="container__progressbars">
        <div class="progressbar">
          <svg class="progressbar__svg">
            <circle
              cx="80"
              cy="80"
              r="70"
              class="progressbar__svg-circle circle-html shadow-html"
            ></circle>
          </svg>
          <span class="progressbar__text shadow-html">HTML</span>
        </div>

        <div class="progressbar">
          <svg class="progressbar__svg">
            <circle
              cx="80"
              cy="80"
              r="70"
              class="progressbar__svg-circle circle-css shadow-css"
            ></circle>
          </svg>
          <span class="progressbar__text shadow-css">CSS</span>
        </div>


        <div class="progressbar">
          <svg class="progressbar__svg">
            <circle
              cx="80"
              cy="80"
              r="70"
              class="progressbar__svg-circle circle-js shadow-js"
            ></circle>
          </svg>
          <span class="progressbar__text shadow-js">JavaScript</span>
        </div>

        <div class="progressbar">
          <svg class="progressbar__svg">
            <circle
              cx="80"
              cy="80"
              r="70"
              class="progressbar__svg-circle circle-ts shadow-ts"
            ></circle>
          </svg>
          <span class="progressbar__text shadow-ts">PHP</span>
        </div>

        <div class="progressbar">
          <svg class="progressbar__svg">
            <circle
              cx="80"
              cy="80"
              r="70"
              class="progressbar__svg-circle circle-node shadow-node"
            ></circle>
          </svg>
          <span class="progressbar__text shadow-node">Laravel</span>
        </div>

        <div class="progressbar">
          <svg class="progressbar__svg">
            <circle
              cx="80"
              cy="80"
              r="70"
              class="progressbar__svg-circle circle-react shadow-react"
            ></circle>
          </svg>
          <span class="progressbar__text shadow-react">ReactJS</span>
        </div>
        <div class="progressbar">
          <svg class="progressbar__svg">
            <circle
              cx="80"
              cy="80"
              r="70"
              class="progressbar__svg-circle circle-angular shadow-angular"
            ></circle>
          </svg>
          <span class="progressbar__text shadow-angular">Tailwind</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsElement",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/style.scss";
@import "@/assets/scss/skills.scss";
</style>
