<template>
  <div class="car">
    <h1>This is car</h1>
    <car-ids1 name="car_f"/>
    <p>store: {{ counter }}</p>
  </div>
</template>

<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import CarIds1 from './components/car-ids1.vue'
  import { useState } from '@/reactive'
  export default defineComponent({
    components: {
      CarIds1
    },
    setup(props: any) {
      const counter: number = (useState as any)().state.counter
      return {
        counter
      }
    }
  })
</script>