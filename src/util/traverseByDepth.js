import isMap from './isMap'

const leftToRight = (node, cb) => {
  if (isMap(node) && !node.isEmpty()) {
    const leftChild = node.get('left')
    const rightChild = node.get('right')

    if (leftChild) leftToRight(leftChild, cb)     // traverse the left subtree
    cb.call(this, node)                       // process the callback on the current node
    if (rightChild) leftToRight(rightChild, cb)   // traverse the right subtree
  }
}

const rightToleft = (node, cb) => {
  if (isMap(node) && !node.isEmpty()) {
    const leftChild = node.get('left')
    const rightChild = node.get('right')

    if (rightChild) rightToleft(rightChild, cb) // traverse the right subtree
    cb.call(this, node)                       // process the callback on the current node
    if (leftChild) rightToleft(leftChild, cb)   // traverse the left subtree
  }
}

export default function traverseByDepth (callback, startNode = this.root, ltr = true) {
  if (ltr) {
    leftToRight(startNode, callback)
  } else {
    rightToleft(startNode, callback)
  }
}
