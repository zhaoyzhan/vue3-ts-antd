<template>
    <div class="car-model">
        about-model
        <a-button @click="msgHandle">message</a-button>
        <p>v-model-child--{{ vText }}</p>
        <a-button @click="changeModel">change-model</a-button>
    </div>
</template>


<script lang="ts">
    import { defineComponent, onMounted, ref, getCurrentInstance, computed, SetupContext } from 'vue'
    import { message } from 'ant-design-vue'
    type EmitOption = 'update:texts'
    const says: string[] = ['hi', 'hello', '你好', '您好', 'hai']
    export default defineComponent({
        props: ['texts'],
        emits: ['update:texts'],
        setup(props: any, { emit }: SetupContext<EmitOption[]>) {
            const { ctx } = (getCurrentInstance as any)()
            const msgHandle = (): void => {
                ctx.$message.success('chengg')
            }
            const changeModel = (): void => {
                const num: number = parseInt( String(5 * Math.random()))
                emit('update:texts', says[num])
            }
            const vText = computed((): string => {
                return props.texts
            })
            return {
                msgHandle,
                vText,
                changeModel
            }
        }
    })
</script>