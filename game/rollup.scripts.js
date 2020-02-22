import { external, plugins } from '../rollup/tests'
import { sync as globSync } from 'glob'

const input = globSync('scripts/**/*.js', { nodir: true })
const output = { dir: '.scripts/', format: 'cjs', exports: 'named' }

export default { input, output, external, plugins }
