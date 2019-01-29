import { packBaseModule } from '../common/package-module'

let cssStat = {
  0: 'css',
  1: 'hoverCss',
  2: 'groupHoverCss',
  3: 'css'
}

export default {
  props: ['first'],
  computed: {
    info () {
      return this.first.info
    },
    assist () {
      return this.first.info.assist
    },
    cssObj () {
      return this.first.info.cssObj
    },
    innerObj () {
      return this.cssObj.inner[cssStat[this.assist.a]]
    },
    selfObj () {
      return this.cssObj.self[cssStat[this.assist.a]]
    }
  },
  components: {
    ...packBaseModule()
  }
}
