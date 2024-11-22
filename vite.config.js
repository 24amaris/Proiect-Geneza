import { defineConfig } from 'vite'
export default defineConfig({
   base: '',
   build:{
    rollupOptions: {
      input: [ "./index.html", "./predici.html","./rugaciune.html","./despreNoi.html","./evenimente.html","./card.html","./comunitate.html","./contact.html","./departamente.html","./doneaza.html","./transfer.html","./verset.html"]
    }
  }
})