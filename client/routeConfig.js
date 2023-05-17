import PlayMedia from './media/PlayMedia'
import { read } from './media/media-api.js'

const routes = [
  {
    path: '/media/:mediaId',
    component: PlayMedia,
    loadData: (params) => read(params)
  }

]
export default routes
