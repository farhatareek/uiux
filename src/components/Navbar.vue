<template>
  <div class="relative montserrat pt-6 flex flex-row justify-between bottom-10">
    <!-- Background Image  -->
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e122b98864ba52164a39350d25119e89e1dc1a48f30ebede8711dbd1874bac04?placeholderIfAbsent=true&apiKey=d64a437ab8f64a9ca8fc16914b2d583b"
      alt=""
      class="object-cover absolute inset-0 w-full h-full"
    />

    <!-- Header and Navigation -->
    <header class="relative flex items-center justify-between w-full text-2xl font-medium p-6 text-zinc-100">
      <!-- Logo on the left -->
      <router-link to="/" class="md:w-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b36db72682e1efc034696b2254ee56a9212df5e90c2bda7b8c14d25164183a9f?placeholderIfAbsent=true&apiKey=d64a437ab8f64a9ca8fc16914b2d583b"
          alt="Company logo"
          class="object-contain w-56 max-md:w-48"
        />
      </router-link>

      <!-- Navigation Links for Desktop -->
      <nav class="hidden mb-10 md:flex gap-6">
        <a href="#work" class="text-white">Work</a>
        <a href="#about" class="text-white">About</a>
        <a href="#contact" class="text-white">Contact</a>
        <a href="" download="../assets/Parinistha-Sharma._ Resume.pdf" class="text-white">
          Resume
          <font-awesome-icon class="text-white text-2xl" icon="file-arrow-down" />
        </a>
      </nav>

      <!-- Burger Icon / Exit Icon for Mobile -->
      <button
        @click="toggleMenu"
        class="md:hidden text-white focus:outline-none z-20"
      >
        <!-- Conditionally render the icon based on the menu state -->
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

        <!-- Exit Icon -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="black"
          class="w-8 h-8"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Mobile Navigation Links -->
      <nav
        :class="[
          'flex flex-col gap-6 mt-2 absolute top-20 left-0 w-full bg-white text-slate-700 z-10 p-6',
          isMenuOpen ? 'block' : 'hidden'
        ]"
      >
        <a href="#work" class="text-slate-700">Work</a>
        <a href="#about" class="text-slate-700">About</a>
        <a href="#contact" class="text-slate-700">Contact</a>
        <a href="" download="../assets/Parinistha-Sharma._ Resume.pdf" class="text-slate-700">Resume
          <font-awesome-icon class="text-slate-700 text-2xl" icon="file-arrow-down" />
        </a>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "MainNavbar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
