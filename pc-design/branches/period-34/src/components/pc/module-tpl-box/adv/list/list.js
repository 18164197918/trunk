import base from './base'
import { packModuleObj } from '../../../common/package-module'

export default packModuleObj(require.context('.', false, /obj\d+\.js/), base)




