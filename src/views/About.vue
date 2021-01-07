<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{pageSize}}</span>
    <about-ids @add-num="addNum" :num="num"/>
    <p>num:{{num}}</p>
    <br />
    <br />
    <br />
    <p>v-model-f--{{ text }}</p>
    <about-model v-model:texts="text"/>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, customRef } from 'vue'
import AboutIds from './components/about-ids.vue'
import AboutModel from './components/about-model.vue'
function useDebouncedRef (value: string, delay = 200) {
  let timeout: any = null
  return customRef((track, trigger) => {
    return {
      get () {
        track()
        return value
      },
      set (newValue: string) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}

export default defineComponent({
  components: {
    AboutIds,
    AboutModel
  },
  setup () {
    const pageSize = 10
    const num = ref<number>(1)
    const addNum = (numP: number): void => {
      num.value = numP
    }
    return {
      pageSize,
      addNum,
      num,
      text: useDebouncedRef('hello')
    }
  }
})
</script>
