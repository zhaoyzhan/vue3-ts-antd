<template>
    <div class="car-ids1">
        about-ids
        <a-button @click="add('add-num', pNum + 1)" type="primary">点击 + 1</a-button>
        <a-button @click="add('add-num', pNum - 1)">点击 - 1</a-button>
        <div ref="testRef">ref</div>
    </div>
</template>


<script lang="ts">
    import { defineComponent, onMounted, ref, computed, watchEffect, onBeforeUpdate } from 'vue'
    export default defineComponent({
        props: {
            num: Number
        },
        setup(props: any, context: any) {
            const add: void = context.emit
            const pNum = computed((): number => {
                return props['num'] | 0
            })
            const testRef = ref<any>(null)
            watchEffect(() => {
                console.log('watchEffect', pNum.value)
            })
            onMounted(() => {
                console.log(testRef.value, 'lllll', this)
            })
            onBeforeUpdate(() => {
                console.log('lllllonBeforeUpdate')
            })
            return {
                add,
                pNum,
                testRef
            }
        }
  })
</script>