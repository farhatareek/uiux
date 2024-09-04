<template>
<div class="relative top-20">
  <p class="md:text-4xl text-2xl text-center  font-semibold text-gray-300 mb-4">
      Things you won’t find on my Resume
    </p>
  <div class="flex h-screen items-center justify-center text-white">
    <div class="flex flex-col sm:flex-row w-full max-w-6xl mx-auto">
      <!-- Text Section -->
      <div class="flex-1 flex flex-col items-center justify-center px-8 mb-8 sm:mb-0">
        <!-- Title -->
        <h1 class="text-2xl font-semibold text-gray-300 mb-4">{{ currentTitle }}</h1>
        <!-- Typing Effect for Text -->
        <h2 class="text-2xl diffrent-color font-bold">
          {{ displayedText }}
        </h2>
      </div>
      <!-- Image Section -->
      <div class="flex-1 flex items-center justify-center px-8">
        <img
          src="../assets/Subject.png"
          alt="Logo"
          class="w-8 left-24 relative bottom-[140px] z-10 h-8 md:w-10 md:h-10 animate__animated animate__backInRight"
          :style="{ transform: 'rotate(15deg)' }"
        />
        <transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
          <img :key="currentImage" :src="currentImage" alt="Polaroid" class="w-64 h-80 object-cover rounded-lg shadow-lg" />
        </transition>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AnimatedContent',
  data() {
    return {
      titles: [
        "I am a...",
        "I am a...",
        "I love...",
        "I love...",
        "I am a...",
        "I am a...",
        "I love...",
      ],
      texts: [
        "Dog Lover",
        "Travel Enthusiast",
        "Watching Crime Documentaries",
        "Listening to Podcasts",
        "GOT Fan",
        "Potterhead...also a Slytherine",
        "Playing Board Games"
      ],
      images: [
        require('../assets/Group 1900 (1).png'),
        require('../assets/Group 1901.png'),
        require('../assets/Group 1902.png'),
        require('../assets/Group 1903.png'),
        require('../assets/Group 1904.png'),
        require('../assets/Group 1906.png'),
        require('../assets/Group 1905.png'),
      ],
      currentIndex: 0,
      displayedText: '', // For typing effect
      typingInterval: null,
    };
  },
  computed: {
    currentTitle() {
      return this.titles[this.currentIndex];
    },
    currentText() {
      return this.texts[this.currentIndex];
    },
    currentImage() {
      return this.images[this.currentIndex];
    }
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      this.startTypingEffect();
    },
    startTypingEffect() {
      clearInterval(this.typingInterval);
      this.displayedText = '';
      let currentText = this.currentText;
      let i = 0;
      this.typingInterval = setInterval(() => {
        if (i < currentText.length) {
          this.displayedText += currentText[i];
          i++;
        } else {
          clearInterval(this.typingInterval);
        }
      }, 100); // Adjust typing speed here (100ms per character)
    },
    beforeEnter(el) {
      el.style.opacity = 0;
    },
    enter(el, done) {
      el.offsetHeight; // trigger reflow
      el.style.transition = 'opacity 1s';
      el.style.opacity = 1;
      done();
    },
    leave(el, done) {
      el.style.transition = 'opacity 1s';
      el.style.opacity = 0;
      done();
    }
  },
  created() {
    this.startTypingEffect();
    setInterval(this.nextSlide, 3000); // Adjust timing to match the typing effect duration
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap');
.diffrent-color {
  color: #A0E9E5 !important;
  font-family: "Playwrite CU", cursive;
  font-optical-sizing: auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
