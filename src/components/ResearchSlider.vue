<template>
  <div ref="customCursor" class="fancy montserrat mt-10 container sm:w-lg w-full">
    <div ref="customCursor" class="relative animate__animated animate__backInDown md:mb-16  custom-cursor-container sm:w-lg w-full flex justify-center items-center  bg-center overflow-hidden">
      <div
        ref="slider"
        :class="['relative container-slider w-full sm:max-w-lg md:max-w-6xl overflow-hidden rounded-lg shadow-lg group']"
        @mousemove="handleMouseMove"
        style="min-height: 90vh;" 
      >
        <!-- Slider Images -->
        <div
        ref="customCursor"
          class="flex fancy transition-transform  duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)`, width: `${images.length * 100}%` }"
        >
          <div
          ref="customCursor"
            v-for="(image, index) in images"
            :key="index"
            class="relative fancy flex-none w-full"
          >
            <router-link :to="image.link" class="w-full" @click="handleClick">
              <!-- First image -->
              <img
                ref="customCursor" 
                :src="image.src"
                :alt="image.alt"
                class="w-full  h-auto sm:max-w-lg md:max-w-6xl object-cover group-hover:opacity-0 transition-opacity duration-500"
              />
              <!-- Second image (hidden initially) -->
              <img
             
                v-if="image.hoverSrc"
                :src="image.hoverSrc"
                :alt="`${image.alt} hover`"
                class="w-full cursor-pointer  h-auto fancy sm:max-w-lg  md:max-w-5xl object-cover absolute top-0 left-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <!-- Text directly on the image -->
              <div class="absolute  fancy left-52 mt-44 inset-0 flex flex-col justify-center items-start p-8 group-hover:opacity-0 transition-opacity duration-500">
                <h1 class="text-2xl md:text-5xl mb-4 text-white">{{ image.title }}</h1>
                <h1 class="text-2xl md:text-4xl mb-4 text-white">{{ image.title2 }}</h1>
                <p class="text-md mb-4 text-white">{{ image.description }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- Dots Navigation -->
      <div class="absolute md:bottom-10 flex justify-center w-full">
        <div class="flex space-x-2">
          <div
            v-for="(image, index) in images"
            :key="index"
            @click="navigateToSlide(index)"
            :class="['w-5 h-5 rounded-full ', currentSlide === index ? 'bg-white' : 'bg-gray-500']"
            style="transition: background-color 0.3s ease;"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullWidthSlider',
  
  data() {
    return {
      currentSlide: 0,
      images: [
        {
          src: require("../assets/Group 39.png"),
          hoverSrc: require("../assets/Group 40.png"),
          alt: "Group 5",
          link: '/FirstProjectwrok'
        },
        {
          src: require("../assets/Group 41.png"),
          hoverSrc: require("../assets/Group 42 (1).png"),
          alt: "Group 6",
          link: '/FirstProjectwrok'
        }
      ],
      autoSlideInterval: null,
      isGoingForward: true
    };
  },
  methods: {
    toggleSlide() {
      if (this.isGoingForward) {
        this.currentSlide = 1;  // Go to the second slide
      } else {
        this.currentSlide = 0;  // Go back to the first slide
      }
      this.isGoingForward = !this.isGoingForward; // Toggle direction
    },
    navigateToSlide(index) {
      this.currentSlide = index; // Navigate to the clicked slide
    },
    handleClick(event) {
      event.preventDefault(); // Prevent default navigation
      this.scrollToTop(); // Scroll to top
      this.$router.push(this.images[this.currentSlide].link); // Programmatically navigate
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page smoothly
    },
    handleMouseMove(e) {
      const cursor = this.$refs.customCursor;
      cursor.style.top = `${e.pageY}px`;
      cursor.style.left = `${e.pageX}px`;
    }
  },
  mounted() {
    this.autoSlideInterval = setInterval(() => {
      this.toggleSlide();
    }, 6000); // 6 seconds
  },
  beforeUnmount() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.montserrat {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.custom-cursor-container {
  position: relative;
  overflow: hidden; /* Ensures no vertical scrollbar appears */
  cursor: url('../assets/pointer.png'), auto;
}

.custom-cursor {
  position: absolute;
  cursor: url(../assets/pointer.png), pointer;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
  opacity: 0;
}
@media (max-width: 768px) {
  .container-slider img{
    max-width: 23rem;
  }
}
.group:hover ~ .custom-cursor {
  opacity: 1;
}


</style>
