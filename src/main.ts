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

//默认调用一次设置
 setHtmlFontSize();
  
 function setHtmlFontSize() {
  // 1. 获取当前屏幕的宽度
  var windowWidth = document.documentElement.offsetWidth;
  // console.log(windowWidth);
  // 2. 定义标准屏幕宽度 假设375
  var standardWidth = 750;
  // 3. 定义标准屏幕的根元素字体大小 假设100px 1rem=100px 10px = 0.1rem 1px 0.01rem
  var standardFontSize = 16;
  // 4. 计算当前屏幕对应的根元素字体大小
  var nowFontSize = windowWidth / standardWidth * standardFontSize + 'px';
  // console.log(nowFontSize);
  // 5. 把当前计算的根元素的字体大小设置到html上
  (document as any).querySelector('html').style.fontSize = nowFontSize;
 }
 // 6. 添加一个屏幕宽度变化的事件 屏幕变化就触发变化根元素字体大小计算的js 
 window.addEventListener('resize', setHtmlFontSize);

const app = createApp(App)

app.config.performance = true
app.use(store)
app.config.globalProperties.$message = message
app.provide(stateSymbol, createState());
app.use(router)
app.use(antd)
app.mount('#app')