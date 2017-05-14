export default function (key) {
  let found = false
  let current = this.root

  while (!found && current) {
    const currentKey = current.get('key')
    if (key < currentKey) {
      current = current.get('left')
    } else if (key > currentKey) {
      current = current.get('right')
    } else {
      found = true
    }
  }

  return current && current.get('value')
}
