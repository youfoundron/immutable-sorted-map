import isMap from './isMap'

const inOrder = (node, cb) => {
  if (isMap(node)) {
    const leftChild = node.get('left')
    const rightChild = node.get('right')

    if (leftChild) inOrder(leftChild, cb)     // traverse the left subtree
    cb.call(this, node)                       // process the callback on the current node
    if (rightChild) inOrder(rightChild, cb)   // traverse the right subtree
  }
}

const inReverse = (node, cb) => {
  if (isMap(node)) {
    const leftChild = node.get('left')
    const rightChild = node.get('right')

    if (rightChild) inReverse(rightChild, cb) // traverse the right subtree
    cb.call(this, node)                       // process the callback on the current node
    if (leftChild) inReverse(leftChild, cb)   // traverse the left subtree
  }
}

export default function traverseByDepth (callback, startNode = this.root, shouldTravelInOrder = true) {
  if (shouldTravelInOrder) {
    inOrder(startNode, callback)
  } else {
    inReverse(startNode, callback)
  }
}
