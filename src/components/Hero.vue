<template >
  <section
    class="relative montserrat md:bottom-32  bg-center h-screen flex flex-col md:flex-row justify-between items-center transition-opacity duration-500 ease-out overflow-hidden"
    :style="{ backgroundImage: 'url(./assets/hero-background.jpg)', opacity: sectionOpacity }"
  >
    <!-- Left Section -->
    <div class="flex-1 relative left-2 md:left-10 animate__animated animate__fadeInBottomLeft md:w-1/2 flex flex-col justify-center items-start p-4 md:p-6 w-full h-full">
      <h1 class="text-2xl md:text-3xl lg:text-5xl text-white">
        Hi, I’m Parinistha Sharma
      </h1>
      <p class="text-lg md:text-xl lg:text-2xl text-white pt-2 md:pt-4 lg:pt-6">
        A product designer who translates…
      </p>
      <div class="escape text-lg md:text-xl lg:text-2xl text-white pt-2 md:pt-4 lg:pt-6">
  Numbers 
  <div>
    <span class="diffrent-color">into Narratives</span>
  </div>
</div>
<div class="escape text-lg md:text-xl lg:text-2xl text-white pt-2 md:pt-4 lg:pt-6">
  Insights 
  <div>
    <span class="diffrent-color">into Interfaces</span>
  </div>
</div>

      <p class="text-base md:text-lg lg:text-xl pt-2 md:pt-4 lg:pt-6 text-white">
        If data’s your muse, then I’m your digital storyteller
      </p>
    </div>
    <!-- Right Section -->
    <div v-if="isVisible" class="flex-1 md:w-1/2 flex flex-col items-center ">
      <!-- First Image (smaller and rotated) -->
      <img
        src="../assets/Subject.png"
        alt="Logo"
        class="w-10 h-8 relative top-3 z-20 sm:w-10 md:w-24 md:h-18 lg:w-11 lg:h-11 animate__animated animate__backInRight"
        :style="{ transform: 'rotate(15deg)' }"
      />
      <!-- Second Image (bigger and rotated) -->
      <div :style="{ transform: 'rotate(15deg)' }">
        <img
          class="animate__animated animate__slideInUp relative w-60 md:w-48 md:h-64 h-68 lg:w-80 lg:h-auto mt-4"
          src="../assets/Group 6 (1).png"
          alt="Animated Logo"
        />
      </div>
      <!-- Typing text at the end of the second image -->
      <div
        class="relative grayColor  bottom-6 md:bottom-14 typewriter diffrent-color sm:text-sm md:text-lg lg:text-xl font-bold"
        :style="{ transform: 'rotate(15deg)' }"
      >
        {{ displayedText }}
      </div>
    </div>
  </section>
  <AboutSection/>
  <ButtonGroup/>
</template>

<script>
import AboutSection from './AboutSection.vue'
import ButtonGroup from './WorkButtons.vue'

export default {
  name: "HeroSection",
  components: {
    AboutSection,
    ButtonGroup
  },
  
  data() {
    return {
      isVisible: false,
      displayedText: "You can call me Pari...",
      sectionOpacity: 1, // Default opacity
    };
  },
  mounted() {
    setTimeout(() => {
      this.isVisible = true;
    }, 1000); // Show after 1 second

    // Add scroll event listener
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    // Remove the scroll event listener
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const fadeStart = 200; // Start fading after 100px scroll
      const fadeEnd = 600; // Fully fade out by 400px scroll
      if (scrollPosition >= fadeStart && scrollPosition <= fadeEnd) {
        this.sectionOpacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
      } else if (scrollPosition > fadeEnd) {
        this.sectionOpacity = 0;
      } else {
        this.sectionOpacity = 1;
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.montserrat {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 55%;
  }
}

@keyframes blinkCursor {
  from {
    border-color: transparent;
  }
  to {
    border-color: black;
  }
}

.typewriter {
  overflow: hidden;
  white-space: nowrap;
  animation: typewriter 4s steps(40) 1s 1 normal both,
    blinkCursor 500ms steps(40) infinite normal;
}

.diffrent-color {
  color: #A0E9E5 !important;
  font-family: "Playwrite CU", cursive;
  font-optical-sizing: auto;
}
.escape {
  display: flex;
  flex-direction: row;
  gap: 0.5rem; /* Adjust gap as needed */
}

.escape div {
  display:inline-block;
  overflow:hidden;
  white-space:nowrap;
}

.escape div:first-of-type {    /* For increasing performance 
                       ID/Class should've been used. 
                       For a small demo 
                       it's okaish for now */
  animation: showup 7s infinite;
}

.escape div:last-of-type {
  width:0px;
  animation: reveal 7s infinite;
}

.escape div:last-of-type span {
  margin-left:-355px;
  animation: slidein 7s infinite;
}

@keyframes showup {
    0% {opacity:0;}
    20% {opacity:1;}
    80% {opacity:1;}
    100% {opacity:0;}
}

@keyframes slidein {
    0% { margin-left:-800px; }
    20% { margin-left:-800px; }
    35% { margin-left:0px; }
    100% { margin-left:0px; }
}

@keyframes reveal {
    0% {opacity:0;width:0px;}
    20% {opacity:1;width:0px;}
    30% {width:355px;}
    80% {opacity:1;}
    100% {opacity:0;width:355px;}
}
.grayColor{
  color: #1D2D31 !important;
}
@media (max-width: 768px) {
  @keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
}
</style>
