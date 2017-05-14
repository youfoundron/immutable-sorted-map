import isMap from './isMap'
import identityFunc from './identityFunc'

export default function getMinNode (node = this.root, callback = identityFunc) {
  const leftChild = node.get('left')
  return isMap(leftChild)
    ? this.getMinNode(leftChild, callback)
    : callback(node)
}
