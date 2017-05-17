import identityFunc from './identityFunc'

export default function getMaxNode (node = this.root, onTraverse = identityFunc) {
  const rightChild = node.get('right')
  if (this.isMap(rightChild)) {
    onTraverse(rightChild)
    return this.getMaxNode(rightChild, onTraverse)
  }
  return node
}
