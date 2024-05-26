import { createMemoryHistory, createRouter } from 'vue-router'

import UploadView from './components/UploadImage.vue'
import QueryView from './components/TagQuery.vue'
const routes = [
  
  { path: '/upload', component: UploadView },
  { path: '/query', component: QueryView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router