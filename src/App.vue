<template>
  <div class="w-screen h-screen flex p-10 gap-5 bg-gray-900">
    <div class="plate bg-plate1 bg-cover w-full h-full rounded-lg transition-all duration-500 ease-out flex items-end p-5 text-white font-bold text-3xl" @click="chooseMe">
      <h1 class="opacity-100 transition-all duration-500 ease-out">Morning</h1></div>
    <div class="plate bg-plate2 bg-cover w-1/12 h-full rounded-lg transition-all duration-500 ease-out flex items-end p-5 text-white font-bold text-3xl" @click="chooseMe">
      <h1 class="opacity-0 transition-all duration-500 ease-out">Train in the Wild</h1></div>
    <div class="plate bg-plate3 bg-cover w-1/12 h-full rounded-lg transition-all duration-500 ease-out flex items-end p-5 text-white font-bold text-3xl" @click="chooseMe">
      <h1 class="opacity-0 transition-all duration-500 ease-out">Hotel</h1></div>
    <div class="plate bg-plate4 bg-cover w-1/12 h-full rounded-lg transition-all duration-500 ease-out flex items-end p-5 text-white font-bold text-3xl" @click="chooseMe">
      <h1 class="opacity-0 transition-all duration-500 ease-out">Tree</h1></div>
    <div class="plate bg-plate5 bg-cover w-1/12 h-full rounded-lg transition-all duration-500 ease-out flex items-end p-5 text-white font-bold text-3xl" @click="chooseMe">
      <h1 class="opacity-0 transition-all duration-500 ease-out">Fireworks</h1></div>
  </div>
</template>

<script setup>
  const chooseMe = (event) => {
    const plates = document.querySelectorAll(".plate");
    const texts = document.querySelectorAll("h1");
    plates.forEach(plate => {
      plate.classList.remove('w-full');
      plate.classList.add('w-1/12');
    })
    texts.forEach(text => { 
      text.classList.remove('opacity-100');
      text.classList.add('opacity-0');
    })
    event.target.classList.remove('w-1/12');
    event.target.classList.add('w-full');
    event.target.querySelector('h1').classList.remove('opacity-0');
    event.target.querySelector('h1').classList.add('opacity-100');
  }
</script>
