import base from './base'
import { packModuleObj } from '../../../../pc&mobile/common/package-module'

export default packModuleObj(require.context('.', false, /obj\d+\.js/), base)
