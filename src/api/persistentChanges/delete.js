export default function (key) {
  const keyPath = []

  const [node, found] = this.search(
    key,
    (node, found) => [node, found],
    () => keyPath.push('left'),
    () => keyPath.push('right')
  )

  if (!node && !found) return this.klass(this.root)

  const isRoot = keyPath.length === 0
  const leftChild = node.get('left')
  const rightChild = node.get('right')
  const numChildren = [leftChild, rightChild].reduce(
    (total, child) => this.isMap(child) ? ++total : total
    , 0
  )

  switch (numChildren) {
    case 0 : return this.klass(
      isRoot
      ? this.root.deleteAll(['key', 'value', 'left', 'right'])
      : this.root.deleteIn(keyPath)
    )
    case 1 : return this.klass(
      isRoot
      ? leftChild || rightChild
      : this.root.setIn(keyPath, leftChild || rightChild)
    )
    case 2 :
      const minNodeKeyPath = ['right']
      const minNode = this.getMinNode(
        rightChild, n => minNodeKeyPath.push('left')
      ).set('left', leftChild).set('right', rightChild)

      return this.klass(
        isRoot
        ? minNode.deleteIn([...minNodeKeyPath])
        : this.root
          .setIn(keyPath, minNode)
          .deleteIn([...keyPath, ...minNodeKeyPath])
      )
    default : return this.klass(this.root)
  }
}
