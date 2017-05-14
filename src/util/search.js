const emptyFunc = () => null

export default function (
  key,
  callback = emptyFunc,
  onLeftTraverse = emptyFunc,
  onRightTraverse = emptyFunc
) {
  let found = false
  let current = this.root

  while (!found && current) {
    const currentKey = current.get('key')
    if (key < currentKey) {
      onLeftTraverse(current)
      current = current.get('left')
    } else if (key > currentKey) {
      onRightTraverse(current)
      current = current.get('right')
    } else {
      found = true
    }
  }

  return callback(current, found)
}
