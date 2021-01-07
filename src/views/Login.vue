<template>
  <div class="login">
    <h1>This is login</h1>
    <p><a-input v-model:value="form.account" placeholder="账号" /></p>
    <p><a-input v-model:value="form.password" placeholder="密码" /></p>
    <a-button @click="logHandle">登录</a-button>
  </div>
</template>

<script lang="ts">
    import { defineComponent, ref, getCurrentInstance } from 'vue'
    import { Login } from '@/api/login'
    interface loginT {
        account: string,
        password: string
    }
    interface loginProp {}
    export default defineComponent({
        setup(props: loginProp) {
            const { ctx } = (getCurrentInstance as any)();
            const form = ref<loginT>({
                account: '',
                password: ''
            })
            const logHandle = async (): Promise<void> => {
                try {
                    const data: any = await Login({
                        ...form.value,
                        grant_type: 'employee_pwd'
                    })
                    console.log(data, 'llll')
                    ctx.$message.success(`登录成功--${data.name}`)
                } catch (error) {
                    console.log(error)
                    ctx.$message.error('登录失败')
                }
            }
            return {
                form,
                logHandle
            }
        }
    })
</script>