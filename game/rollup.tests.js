import { external as commonExternals, plugins, output } from '../rollup/tests'
import { sync as globSync } from 'glob'

const input = globSync('test/**/*.js', { nodir: true })

const localBuiltins = [ 'fs', 'path', 'glob' ]

const external = [ ...commonExternals, ...localBuiltins ]

export default { input, output, external, plugins }
