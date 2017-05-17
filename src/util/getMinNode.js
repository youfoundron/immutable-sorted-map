import identityFunc from './identityFunc'

export default function getMinNode (node = this.root, onTraverse = identityFunc) {
  const leftChild = node.get('left')
  if (this.isMap(leftChild)) {
    onTraverse(leftChild)
    return this.getMinNode(leftChild, onTraverse)
  }
  return node
}
