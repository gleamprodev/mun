import { blocks, env, wallet } from '../starportvux'

import generated from './generated'
export default function init(store) {
  for (const moduleInit of Object.values(generated)) {
    moduleInit(store)
  }
  blocks(store)
  env(store)
  wallet(store)
}
