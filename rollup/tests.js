import { external as srcExternals, plugins as srcPlugins } from './common'

export const external = [...srcExternals, 'mocha']

export const output = { dir: '.tests/', format: 'cjs', exports: 'named' }

export const plugins = srcPlugins
