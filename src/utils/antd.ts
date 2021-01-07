import {
  Button,
  Input,
  Layout,
  Menu
} from 'ant-design-vue'

const ant = {
  install (Vue: any) {
    Vue.component(Button.name, Button)
    Vue.component(Input.name, Input)
    Vue.use(Layout)
    Vue.use(Menu)
  }
}
export default ant
