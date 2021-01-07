<template>
  <div class="home">
    <h1>This is home</h1>
    <p>{{ counter }}</p>
    <a-button @click="handleC">点击修改state</a-button>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, getCurrentInstance } from 'vue'
  import { useState, stetaP } from '@/reactive'
  interface IProps {}
  type voidF = () => void
  export default defineComponent({
    setup(props: IProps) {
      const {state, increment}: {state: stetaP, increment: voidF} = useState()
      const counter = computed((): number => {
        return state.counter
      })
      const handleC: voidF = increment
      onMounted(() => {})
      return {
        handleC,
        counter
      }
    }
  })
</script>