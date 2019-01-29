import moduleBase from './moduleBase'
import { packModuleObj } from '../common/package-module'

export default packModuleObj(require.context('.', false, /moduleObj\d+\.js/), moduleBase)
