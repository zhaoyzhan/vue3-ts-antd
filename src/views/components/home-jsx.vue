<template>
    <div>
        homejsx
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useCart } from '@/reactive/test'
export default defineComponent({
    name: 'home-jsx',
    setup(props: any) {
        onMounted(() => {
            console.log(useCart(), 'llll')
        })
    }
})
</script>