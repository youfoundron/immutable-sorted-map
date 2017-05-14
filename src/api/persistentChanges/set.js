export default function (key, value) {
  const keyPath = []
  let found = false
  let current = this.root

  while (!found && current) {
    const currentKey = current.get('key')
    if (key < currentKey) {
      keyPath.push('left')
      current = current.get('left')
    } else if (key > currentKey) {
      keyPath.push('right')
      current = current.get('left')
    } else {
      found = true
    }
  }

  return this.klass(
    this.root
      .setIn([...keyPath, 'key'], key)
      .setIn([...keyPath, 'value'], value)
  )
}
