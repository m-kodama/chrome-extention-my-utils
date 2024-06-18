import { createApp } from 'vue'
import '~/assets/tailwind.css'
import '~/style.css'
import '~/assets/MaterialSymbolsRounded.woff2'
import ContentScriptApp from '~/contentScripts/ContentScriptApp.vue'

const createStyle = (href: string): HTMLLinkElement => {
  const style = document.createElement('link')
  style.setAttribute('rel', 'stylesheet')
  style.setAttribute('href', href)
  return style
}

;(() => {
  console.log('load contentScripts/script.ts')

  const shadowContainer = document.createElement('div')
  const shadowDom = shadowContainer.attachShadow({ mode: 'closed' })

  // const tailwind = createStyle(chrome.runtime.getURL('src/assets/tailwind.css'))
  // shadowDom.appendChild(tailwind)
  // const style = createStyle(chrome.runtime.getURL('src/style.css'))
  // shadowDom.appendChild(style)
  const style2 = createStyle(chrome.runtime.getURL('assets/style.css'))
  shadowDom.appendChild(style2)
  // const materialSymbol = createStyle('https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded')
  // shadowContainer.appendChild(materialSymbol)
  // const materialSymbol = document.createElement('style')
  // materialSymbol.innerHTML = `
  // @font-face {
  //   font-family: 'Material Symbols Rounded';
  //   font-style: normal;
  //   font-weight: 400;
  //   src: url('${chrome.runtime.getURL('assets/MaterialSymbolsRounded.woff2')}') format('woff2');
  // }

  // .material-symbols-rounded {
  //   font-family: 'Material Symbols Rounded';
  //   font-weight: normal;
  //   font-style: normal;
  //   font-size: 24px;
  //   line-height: 1;
  //   letter-spacing: normal;
  //   text-transform: none;
  //   display: inline-block;
  //   white-space: nowrap;
  //   word-wrap: normal;
  //   direction: ltr;
  //   -webkit-font-feature-settings: 'liga';
  //   -webkit-font-smoothing: antialiased;
  // }`
  // shadowDom.appendChild(materialSymbol)

  const appRoot = document.createElement('div')
  shadowDom.appendChild(appRoot)

  document.body.appendChild(shadowContainer)

  const app = createApp(ContentScriptApp)
  app.mount(appRoot)
})()
