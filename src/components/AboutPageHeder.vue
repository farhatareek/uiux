<template>
    <section
      class="relative  md:bottom-36 bottom-10  bg-center  h-full flex flex-col md:flex-row justify-between items-center transition-opacity duration-500 ease-out overflow-hidden"
      :style="{ backgroundImage: 'url(./assets/hero-background.jpg)', opacity: sectionOpacity }"
    >
      <!-- Left Section -->
      <div class="flex-1 relative left-4 md:left-14 animate__animated animate__fadeInBottomLeft md:w-1/2 flex flex-col justify-center items-start   h-full">
        <h1 class="text-4xl mb-6 md:text-5xl text-white">
            About Me
        </h1>
        <p class="text-xl md:text-2xl text-white pt-4 md:pt-10">
            I am a  <span class="diffrent-color">Engineer</span> turned <span class="diffrent-color">Product Designer</span> 
            currently<br> based in Chicago.
        </p>
        <p class="text-lg md:text-xl pt-4 md:pt-10 text-white">
          I recently completed my Masters in Human Computer<br> Interaction from DePaul University, Chicago Illinois.<br> 
        </p>
        <p class="text-lg md:text-xl pt-4 md:pt-10 text-white">
          Previously, earned my Bachelors in Engineering from Mumbai<br> University.
        </p>
      </div>
      <!-- Right Section -->
      <div v-if="isVisible" class="flex-1 md:w-1/2 flex flex-col items-center w-full h-full">
        <!-- First Image (smaller and rotated) -->
        <img
          src="../assets/Subject.png"
          alt="Logo"
          class="w-8 relative md:top-20 top-16 z-10 h-8 md:w-11 md:h-11 animate__animated animate__backInRight"
          :style="{ transform: 'rotate(15deg)' }"
        />
        <!-- Second Image (bigger and rotated) -->
        <div :style="{ transform: 'rotate(15deg)' }">
          <img
            class="animate__animated animate__slideInUp relative  w-80 h-96  md:w-[450px] md:h-auto mt-4"
            src="../assets/Group 1907 (1).png"
            alt="Animated Logo"
          />
        </div>
        <!-- Typing text at the end of the second image -->
        <div
          class="mt-4 relative garyaColor bottom-28 typewriter text-md md:text-xl font-bold"
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

  export default {
    name: "AboutPageHeder",
    data() {
      return {
        isVisible: false,
        displayedText: "Parinistha Sharma",
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
        const fadeStart = 100; // Start fading after 100px scroll
        const fadeEnd = 900; // Fully fade out by 400px scroll
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
  
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 50%;
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
  @media (max-width:740px) {
  @keyframes typewriter {
    from {
      width: 0;
    }
    to {
      width: 65%;
    }
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
  .garyaColor{
    color: #1D2D31;
    font-family: "Playwrite CU", cursive;
    font-optical-sizing: auto;
  }
  </style>
  