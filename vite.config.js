import { defineConfig } from 'vite'
export default defineConfig({
   base: '',
   build:{
    rollupOptions: {
      input: [ "./index.html", "./predici.html","./rugaciune.html","./despreNoi.html","./evenimente.html",]
    }
  }
})