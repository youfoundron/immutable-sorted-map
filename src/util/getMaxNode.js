import isMap from './isMap'

export default function getMaxNode (node = this.root) {
  const rightChild = node.get('right')
  return isMap(rightChild) ? this.getMaxNode(rightChild) : node
}
