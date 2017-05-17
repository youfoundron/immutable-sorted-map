export default function (...trees) {
  return trees.reduce((resultTree, currTree) => {
    currTree.traverseByDepth(node => {
      resultTree = resultTree.set(node.get('key'), node.get('value'))
    })
    return resultTree
  }, this)
}
