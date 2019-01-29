import { WEBSITE_NAME } from '../config'
import { changeScene } from '../tools/http'

let scene

export default function (router) {
  router.beforeEach((to, from, next) => {
    if (to.meta.cName) {
      document.title = `${to.meta.cName}${WEBSITE_NAME}`
    }

    let newScene = to.meta.scene
    if (newScene && !(scene === newScene)) {
      scene = newScene
      changeScene(newScene)
    }

    next()
  })
}
