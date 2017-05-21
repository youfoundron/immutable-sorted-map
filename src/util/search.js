import identityFunc from './identityFunc'
import _compareKeys from './compareKeys'

export default function (
  key,
  callback = identityFunc,
  onLeftTraverse = identityFunc,
  onRightTraverse = identityFunc,
  startNode = this.root,
  compareKeys = this.compareKeys || _compareKeys
) {
  let found = false
  let current = startNode

  while (!found && current) {
    const currentKey = current.get('key')
    if (compareKeys(key, currentKey) === -1) {
      onLeftTraverse(current)
      current = current.get('left')
    } else if (compareKeys(key, currentKey) === 1) {
      onRightTraverse(current)
      current = current.get('right')
    } else {
      found = true
    }
  }

  return callback(current, found)
}
