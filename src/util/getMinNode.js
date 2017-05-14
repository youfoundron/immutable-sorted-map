import isMap from './isMap'

export default function getMinNode (node = this.root) {
  const leftChild = node.get('left')
  return isMap(leftChild) ? this.getMinNode(leftChild) : node
}
