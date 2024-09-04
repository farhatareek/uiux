<template>
  <div class="relative md:mt-44 flex flex-col items-center  md:pb-24 fontFamilyText overflow-hidden">
    <img 
      loading="lazy" 
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/e122b98864ba52164a39350d25119e89e1dc1a48f30ebede8711dbd1874bac04?placeholderIfAbsent=true&apiKey=d64a437ab8f64a9ca8fc16914b2d583b" 
      alt="" 
      class="absolute inset-0 object-cover w-full h-full"
    />
    
    <!-- Connect Section -->
    <section class="relative text-center text-white md:mt-32 max-md:mt-10">
      <h2 class="text-5xl font-bold max-md:text-3xl">Let's Connect!</h2>
      <p class="mt-10 text-4xl font-medium max-md:mt-6 max-md:text-2xl">
        I am open to new opportunities and collaborations.
      </p>
      
      <ul class="flex flex-wrap justify-center gap-4 w-full max-w-md mx-auto mt-8">
        <li>
          <a href="mailto:parinisthasharma23@gmail.com">
  <img class="w-16 max-md:w-12" src="../assets/gmail.png" alt="Gmail">
</a>

        </li>
        <li>
          <a href="http://linkedin.com/in/parinisthasharma">
            <img class="w-16 max-md:w-12" src="../assets/linkedin.png" alt="LinkedIn">
          </a>
        </li>
        <li>
          <a href="mailto:psharm17@depaul.edu">
  <img class="w-16 max-md:w-12" src="../assets/outlook.png" alt="Outlook">
</a>

        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playwrite+CU:wght@100..400&display=swap');

.fontFamilyText {
  font-family: "Playwrite CU", cursive;
  font-optical-sizing: auto;
}
</style>
