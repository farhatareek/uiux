<template>
    <div
      ref="section"
      :class="{'animate__animated animate__backInDown': animate}"
      class="m-5 relative left-4 md:left-14 mb-28 top-20 md:bottom-10"
    >
      <p class="md:text-5xl text-4xl text-white">Why UX?</p>
      <p class="md:text-2xl text-xl mt-10 text-white">
        I have always been intrigued by how technology can connect people. I decided to pursue a career in Human-computer interaction, where I could combine my curiosity, creativity, and technical skills to craft meaningful and innovative user experiences.
      </p>
      <p class="md:text-2xl text-xl mt-10 text-white">
        I am highly motivated to explore new challenges and expand my knowledge and abilities.
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WhyuiuxParagraph',
    data() {
      return {
        animate: false,
      };
    },
    mounted() {
      const options = {
        root: null, 
        threshold: 0.1, 
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.animate = true;
            observer.unobserve(entry.target); // Stop observing once the animation has started
          }
        });
      }, options);
  
      observer.observe(this.$refs.section);
    },
  };
  </script>
  
  <style scoped>
  @import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
  </style>
  