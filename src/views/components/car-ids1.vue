<template>
  <div class="car-ids1">
    car-ids1
    <p>{{ name }}</p>
    <p>name: {{ msg.name }}</p>
    <p>age: {{ msg.age }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
type naT = {
  name: string;
}
type neT = {
  age: number;
}
type asc = string
type allT = naT & neT
export default defineComponent({
  setup () {
    const name = ref<asc>('1222')
    const msg = ref<allT>({
      name: '3333',
      age: 24
    })
    onMounted(() => {
      msg.value.name = 'weeee'
    })
    return {
      name,
      msg
    }
  }
})
</script>
