import { App } from 'vue'
import LText from './components/LText'
import LImage from './components/LImage'
import LShape from './components/LShape'

const components = [LText, LImage, LShape]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

// 组件的按需注册
export { LText, LImage, LShape, install }

// 组件全部注册
export default install
