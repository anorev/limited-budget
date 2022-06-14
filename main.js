import './style.css'
import Alpine from 'alpinejs'

window.Alpine = Alpine

Alpine.start()

document.querySelector('#app').innerHTML = `
  <h1>Limited Budget!</h1>
  <a href="/pages/search.html">Start</a>
`
