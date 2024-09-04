<template>
  
  <div ref="aboutSection" class="flex montserrat mt-10 pt-20 relative md:bottom-14 flex-col md:mb-32 items-center justify-center">
    <div :class="{ 'animate__animated animate__pulse': isInView }">
      <div class="flex p-3 bg-white bg-opacity-0 text-zinc-100 rounded-[50px] shadow-[0px_4px_10px_rgba(246,238,191,1)] relative justify-center about-section z-20 overflow-hidden items-center">
        <section class="bgColorGradient text-center max-w-6xl">
          <div class="flex max-w-5xl justify-center flex-row flex-wrap items-center text-sm  pb-14 md:px-20 md:pt-20 md:pb-14">
            <h2 class="text-2xl  text-white  text-center md:text-6xl">About Me</h2>
            <div class="fade-wrapper flex  flex-row w-full">
              <!-- First Text Block -->
              <div class="fadein   first">
                <p class="mt-6 text-xl text-teal-200 text-center md:mt-12 md:text-2xl">
                  <span>3+</span>
                  <span class="font-extrabold">years</span>
                </p>
                <p class="text-xl text-center md:text-2xl">
                  Of Industry Experience
                </p>
              </div>
              <!-- Second Text Block -->
              <div class="fadein second">
                <p class="mt-6 text-xl text-teal-200 text-center md:mt-12 md:text-2xl">
                  <span class="font-extrabold">Masters Graduate</span>
                </p>
                <p class="text-xl text-center md:text-2xl">
                  Human Computer Interaction
                </p>
              </div>
            </div>
            <a
              href="/AboutHolePageDesign"
              class="flex  relative  bgColorr sm:bottom-10 top-14 md:mt-24 w-44 md:w-46 h-12 text-center text-xl rounded-[80px] shadow-[0px_4px_24px_rgba(0,0,0,0.5)]"
            >
              <span class="grow pt-2">Learn More</span>
            </a>
          </div>
          <span class="border-span top"></span>
          <span class="border-span right"></span>
          <span class="border-span bottom"></span>
          <span class="border-span left"></span>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      isInView: false, // To track if the section is in view
    };
  },
  mounted() {
    // Create an IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isInView = true; // Apply animation when in view
          } else {
            this.isInView = false; // Optionally, remove animation when out of view
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Observe the section
    observer.observe(this.$refs.aboutSection);
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.montserrat {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.about-section {
  position: relative;
  width: 800px;
  height: 400px;
  border-radius: 50px;
  background: #232526;
  background: -webkit-linear-gradient(to right, #414345, #232526);
  background: linear-gradient(to right, #414345, #232526);
  box-shadow: 0 4px 10px rgba(246, 238, 191, 1);
}

.border-span {
  position: absolute;
  background: linear-gradient(90deg, #0c002b, #1779ff);
}

.border-span.top {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  animation: animate1 2s linear infinite;
}

.border-span.right {
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  animation: animate2 2s linear infinite;
  animation-delay: 1s;
}

.border-span.bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  animation: animate3 2s linear infinite;
}

.border-span.left {
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  animation: animate4 2s linear infinite;
  animation-delay: 1s;
}

@keyframes animate1 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes animate2 {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

@keyframes animate3 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes animate4 {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.fade-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.fadein {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.fadein.first {
  animation: fadeInOut 8s linear infinite;
  animation-delay: 0s; /* Delay for the second fadein */
}

.fadein.second {
  animation: fadeInOut 8s linear infinite;
  animation-delay: 4s; /* Delay to start after the first fades out */
}
.bgColorr {
    background: #345D68 !important;
    background: -webkit-linear-gradient(to right, #345D68, #101010) !important;
    background: linear-gradient(to right, #345D68, #101010) !important;
  }

@media (max-width: 768px) {
  .about-section {
    width:300px; /* Adjust for mobile width */
    height: 300px; /* Allow height to adjust based on content */
    padding: 30px;
  }

  .border-span {
    display: none;
  }
  .fade-wrapper{
    width: 100%;
  }
 

  .fade-wrapper {
    flex-direction: column; /* Stack text blocks vertically on mobile */
  }

  .text-6xl {
    font-size: 3rem; /* Adjust font size for mobile */
  }
  a{
    margin-top: 90px;
    font-size: 15px;
  }

  .text-2xl {
    font-size: 1.5rem; /* Adjust font size for mobile */
  }

 
  
}
</style>
