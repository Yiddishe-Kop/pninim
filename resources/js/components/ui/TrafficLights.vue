<template>
  <div class="flex items-center">
    <span @click="$emit('red')" class="w-3 h-3 rounded-full cursor-pointer" style="background: #ff6058;"></span>
    <span
      @click="$emit('yellow')"
      class="w-3 h-3 mr-1.5 rounded-full cursor-pointer"
      style="background: #ffbd2e;"
    ></span>
    <span
      @click="$emit('green')"
      class="w-3 h-3 mr-1.5 rounded-full cursor-pointer"
      style="background: #28c940;"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'TrafficLights',
};
</script>
