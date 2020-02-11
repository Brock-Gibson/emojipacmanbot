// Common values used in most rollup configurations.

import npm from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'
import flow from 'rollup-plugin-flow'

// Ignore warnings for node built-in modules that rollup doesn't know.
const nodeBuiltIns = ['assert', 'https', 'path', 'url', 'crypto']

const awsBuiltins = ['aws-sdk']

// Provide name mappings for strangely-formatted CommonJS modules.
// TODO: Can we remove this?
const namedExports = { 'aws-sdk': ['DynamoDB'] }

// Common plugins
export const plugins
  = [
    npm({ preferBuiltins: true }),
    flow({ pretty: true }),
    commonjs({ namedExports }),
    json()
  ]

// Common external modules
export const external
  = nodeBuiltIns.concat(awsBuiltins)

// Common output specs
export const output
  = {
  dir: 'deploy/code/',
  format: 'cjs',
  exports: 'named',
  chunkFileNames: '[name].js'
}
