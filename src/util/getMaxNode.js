import isMap from './isMap'
import identityFunc from './identityFunc'

export default function getMaxNode (node = this.root, callback = identityFunc) {
  const rightChild = node.get('right')
  return isMap(rightChild) ? this.getMaxNode(rightChild) : callback(node)
}
