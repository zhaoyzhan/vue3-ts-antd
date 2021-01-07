import { createApp, provide } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antd from './utils/antd'
import 'ant-design-vue/dist/antd.less'
import {
  message
} from "ant-design-vue"
import { stateSymbol, createState } from './reactive/';

const app = createApp(App)

app.config.performance = true
app.use(store)
app.config.globalProperties.$message = message
app.provide(stateSymbol, createState());
app.use(router)
app.use(antd)
app.mount('#app')