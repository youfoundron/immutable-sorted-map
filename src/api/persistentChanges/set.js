export default function (key, value) {
  const keyPath = []

  this.search(
    key,
    undefined,                  // callback
    () => keyPath.push('left'), // onLeftTraverse
    () => keyPath.push('right') // onRightTraverse
  )

  return this.klass(
    this.root
      .setIn([...keyPath, 'key'], key)
      .setIn([...keyPath, 'value'], value)
    , this.compareKeys
  )
}
