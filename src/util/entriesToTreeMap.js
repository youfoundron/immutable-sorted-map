import { Map } from 'immutable'
import search from './search'

const emptyMap = Map()

export default function (entries) {
  let treeMap = emptyMap
  for (let [key, value] of entries) {
    const keyPath = []
    search(key, undefined,
      () => keyPath.push('left'),
      () => keyPath.push('right'),
      treeMap
    )
    treeMap = treeMap
      .setIn([...keyPath, 'key'], key)
      .setIn([...keyPath, 'value'], value)
  }
  return treeMap
}
