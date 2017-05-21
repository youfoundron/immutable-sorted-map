import { Map } from 'immutable'
import search from './search'
import _compareKeys from './compareKeys'

const emptyMap = Map()

export default function (entries, compareKeys = _compareKeys) {
  let treeMap = emptyMap
  for (let [key, value] of entries) {
    const keyPath = []
    search(key, undefined,
      () => keyPath.push('left'),
      () => keyPath.push('right'),
      treeMap,
      compareKeys
    )
    treeMap = treeMap
      .setIn([...keyPath, 'key'], key)
      .setIn([...keyPath, 'value'], value)
  }
  return treeMap
}
