<template >
  <div class="container">
    <AboutPageHeder/>
    <WhyuiuxParagraph/>
    <AboutSliderImg/>
  </div>
</template>

<script>
import AboutPageHeder from './AboutPageHeder.vue';
import WhyuiuxParagraph from './AboutPageUxSection.vue';
import AboutSliderImg from './AboutPolarad.vue'

export default{
    name:'AboutHolePageDesign',
    components: {
    AboutPageHeder,
    WhyuiuxParagraph,
    AboutSliderImg
  }
}

</script>