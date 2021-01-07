<template>
  <div class="layout">
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="logo" />
            <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
                <a-menu-item v-for="item in routers" :key="item.path">
                    <router-link :to="item.path">
                        <user-outlined />
                        <span>{{item.meta.title}}</span>
                    </router-link>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <menu-unfold-outlined
                    v-if="collapsed"
                    class="trigger"
                    @click="() => (collapsed = !collapsed)"
                />
                <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
            </a-layout-header>
            <a-layout-content>
                <vab-content />
            </a-layout-content>
        </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts">
    import { defineComponent, ref, onMounted, computed, watch } from 'vue'
    import store from '@/store'
    import { useRouter } from 'vue-router'
    
    import {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
    } from '@ant-design/icons-vue';
    import VabContent from './vab-content/index.vue';
    type Partial<T> = {
        [P in keyof T]?: T[P];
    }
    interface layoutProp {}
    export default defineComponent({
        components: {
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            MenuUnfoldOutlined,
            MenuFoldOutlined,
            VabContent
        },
        setup(props: layoutProp) {
            const selectedKeys = ref<string[]>([])
            const collapsed = ref<boolean>(false)
            const router = useRouter()
            const routers = computed((): any[] => {
                return router.options.routes
            })
            const setRoutes: () => void = (): void => {
                selectedKeys.value = [router.currentRoute.value.meta.aP]
            }
            onMounted(() => {
                setRoutes();
            })
            return {
                selectedKeys,
                routers,
                collapsed
            }
        }
    })
</script>

<style lang="less" scoped>
    .layout {
        height: 100%;
    }
    :deep .ant-layout-has-sider {
        height: 100%;
    }
    #components-layout-demo-custom-trigger {
        .trigger {
            font-size: 18px;
            padding: 0 24px;
            cursor: pointer;
            transition: color 0.3s;
            line-height: 64px;
            float: left;
            &:hover {
                color: #1890ff;
            }
        }
    }
    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }
</style>
