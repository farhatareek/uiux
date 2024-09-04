<template>
  <div class="flex montserrat  relative top-10 mt-10 md:top-20 bg-cover flex-col items-center min-h-screen bg-gradient-to-r">
  <p class="md:text-4xl text-3xl font-bold text-white pb-24">
    My Recent Work
  </p>
    <!-- Navigation Buttons -->
    <div class="flex justify-between items-center space-x-4 w-4/6 p-6 rounded-full shadow-lg bgg">
      <button 
        id="Redesign"
        class="px-20 py-5 rounded-full text-2xl text-white focus:outline-none" 
        :class="[clickedButton === 1 ? 'bg-gradient pressed-button' : 'bgColorr raised-button']" 
        @click="handleClick(1)">
        Redesign
      </button>
      <button
        id="Products" 
        class="px-20 py-5 rounded-full text-2xl text-white focus:outline-none" 
        :class="[clickedButton === 2 ? 'bg-gradient pressed-button' : 'bgColorr raised-button']" 
        @click="handleClick(2)">
        Products
      </button>
      <button 
        id="Research"
        class="px-20 py-5 rounded-full text-2xl text-white focus:outline-none" 
        :class="[clickedButton === 3 ? 'bg-gradient pressed-button' : 'bgColorr raised-button']" 
        @click="handleClick(3)">
        Research
      </button>
    </div>

    <!-- FullWidthSlider is always visible -->
    <FullWidthSlider v-if="clickedButton === null || clickedButton === 1" />

    <!-- Conditional rendering of other components -->
    <div v-if="clickedButton === 2">
      <ProductsSliders />
    </div>
    <div v-if="clickedButton === 3">
      <ResearchSliders />
    </div>
  </div>
</template>
<script>
import FullWidthSlider from './RedesignSlider.vue'
import ProductsSliders from "./ProductsSlider.vue"
import ResearchSliders from './ResearchSlider.vue'

export default {
  name:'ButtonGroup',
  components: {
    FullWidthSlider,
    ProductsSliders,
    ResearchSliders
  },
  data() {
    return {
      clickedButton: null
    };
  },
  methods: {
    handleClick(buttonNumber) {
      this.clickedButton = buttonNumber;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.montserrat {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.bg-gradient {
  background-image: linear-gradient(to right top, #a0e9e5, #9ad4e5, #a0bed9, #a6a9c2, #a396a6);
  color: #232526;
}

.bgg {
  opacity: 0.7;
  background: #232526;
  background: -webkit-linear-gradient(to right, #414345, #232526);
  background: linear-gradient(to right, #414345, #232526);
  box-shadow: 0 4px 10px rgba(246, 238, 191, 1);
}

.bgColorr {
  background: #345D68;
  background: -webkit-linear-gradient(to right, #345D68, #101010);
  background: linear-gradient(to right, #345D68, #101010);
}

.raised-button {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.raised-button:hover {
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.pressed-button {
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(2px);
}
.bg-cover {
    background-image: url('https://cdn.builder.io/api/v1/image/assets/TEMP/e122b98864ba52164a39350d25119e89e1dc1a48f30ebede8711dbd1874bac04?placeholderIfAbsent=true&apiKey=d64a437ab8f64a9ca8fc16914b2d583b');
    background-size: cover;
    background-position: center;
  }
  @media (max-width: 768px) {
  .bgg {
    width: 90%; /* Make the button container take up 90% of the screen width */
    padding: 12px;
    height: 100px; /* Adjust padding for mobile */
    flex-direction: row;
    border-radius: 35px; /* Stack buttons vertically on mobile */
    
  }
  .bg-gradient-to-r{
    top:180px;
  }

  button {
    width: 30%; /* Full width buttons on mobile */
    padding: 10px; /* Adjust padding for mobile */
    font-size: 15px !important; /* Smaller font size for mobile */
  }
}

@media (max-width: 1024px) {
  button {
    padding: 16px; /* Slightly smaller padding for tablets */
    font-size: 1.25rem; /* Adjust font size for tablets */
  }
}

/* Rest of your existing styles */
.bg-gradient {
  background-image: linear-gradient(to right top, #a0e9e5, #9ad4e5, #a0bed9, #a6a9c2, #a396a6);
  color: #232526;
}

.bgg {
  opacity: 0.7;
  background: #232526;
  background: -webkit-linear-gradient(to right, #414345, #232526);
  background: linear-gradient(to right, #414345, #232526);
  box-shadow: 0 4px 10px rgba(246, 238, 191, 1);
}

.bgColorr {
  background: #345D68;
  background: -webkit-linear-gradient(to right, #345D68, #101010);
  background: linear-gradient(to right, #345D68, #101010);
}

.raised-button {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.raised-button:hover {
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.pressed-button {
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.3);
  transform: translateY(2px);
}

.bg-cover {
  background-image: url('https://cdn.builder.io/api/v1/image/assets/TEMP/e122b98864ba52164a39350d25119e89e1dc1a48f30ebede8711dbd1874bac04?placeholderIfAbsent=true&apiKey=d64a437ab8f64a9ca8fc16914b2d583b');
  background-size: cover;
  background-position: center;
}

</style>
