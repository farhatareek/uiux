import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import './assets/styles.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/flowbite-vue/dist/index.css'
import HeroSection from './components/Hero.vue'
import AboutSection from "./components/AboutSection.vue"
import ButtonGroup from './components/WorkButtons.vue'
import AboutHolePageDesign from './components/AboutHolePage.vue'
import  AboutPageHeder from './components/AboutPageHeder.vue'
import WhyuiuxParagraph  from './components/AboutPageUxSection.vue'
import 'animate.css';
import FirstProjectwrok from './components/firstProject.vue'
import AboutSliderImg from './components/AboutPolarad.vue'
library.add(faFileArrowDown);


const routes = [
    {path:'/',component:HeroSection },
    {path:'/AboutSection', component:AboutSection},
    {path:'/ButtonGroup', component : ButtonGroup},
    {path:'/AboutHolePageDesign', component:AboutHolePageDesign},
    {path:"/AboutPageHeder" , component:AboutPageHeder},
    {path:'/WhyuiuxParagraph', component:WhyuiuxParagraph},
    {path:'/FirstProjectwrok' ,  component:FirstProjectwrok},
    {path:'/AboutSliderImg', component:AboutSliderImg}
 ]



const router = createRouter({
    history: createWebHistory(),
    routes
})
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).mount('#app')
