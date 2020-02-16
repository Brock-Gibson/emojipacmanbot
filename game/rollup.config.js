//@flow

import { output, external, plugins } from '../rollup/common'

export default
  {
    input: {
      'index': 'src/index'
    },
    output,
    external,
    plugins
  }
