<template>
  <div class="hello">
    <JumboElement></JumboElement>

    <AboutElement></AboutElement>

    <ExperienceElement></ExperienceElement>

    <SkillsElement></SkillsElement>

    <PortfolioElement></PortfolioElement>

    <ContactElement></ContactElement>
    <footer class="text-center p-2 text-white">
      Built From Scratch With 🧡 © Copyright 2022, Gabriele Pini All Rights
      Reserved.
    </footer>
  </div>
</template>

<script>
import AboutElement from "./AboutElement.vue";
import JumboElement from "./JumboElement.vue";
import SkillsElement from "./SkillsElement.vue";
import ExperienceElement from "./ExperienceElement.vue";
import PortfolioElement from "./PortfolioElement.vue";
import ContactElement from "./ContactElement.vue";
export default {
  components: {
    JumboElement,
    AboutElement,
    ExperienceElement,
    SkillsElement,
    PortfolioElement,
    ContactElement,
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/style.scss";
</style>
