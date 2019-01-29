import { MODULE_CONTAINER_NAME } from '../common/constant-dom'

export default {
  info    : {
    name     : MODULE_CONTAINER_NAME,
    cName    : '容器',
    static   : {
      gridList    : [12],
      hasSafeLine : true,
    },
    lock     : {},
    cssObj   : {
      self     : {
        class: '',
        css  : {
          minHeight: '300px',
        },
      },
      container: {
        class: '.container',
        css  : {},
      },
    },
  },
  children: [],
  tab     : [],
}
