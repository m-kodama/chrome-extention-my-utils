import { createApp } from 'vue'
import App from '../App.vue'
;(() => {
  console.log('load contentScripts/script.ts')

  const shadowContainer = document.createElement('div')
  const shadowDom = shadowContainer.attachShadow({ mode: 'closed' })
  const appRoot = document.createElement('div')
  shadowDom.appendChild(appRoot)
  // appRoot.style.position = 'absolute'
  // appRoot.style.top = '0px'
  // appRoot.style.left = '0px'
  // appRoot.style.width = '100vw'
  // appRoot.style.height = '100vh'
  // const style = document.createElement('link')
  // style.setAttribute('rel', 'stylesheet')
  // style.setAttribute('href', browser.runtime.getURL('dist/contentScripts/style.css'))
  // shadowDom.appendChild(style)
  document.body.appendChild(shadowContainer)

  const app = createApp(App)
  app.mount(appRoot)
})()
