export default function (...trees) {
  return trees.reduce((resultTree, currTree) => {
    currTree.traverseByDepth(newNode => {
      const keyPath = []

      const [oldNode, found] = this.search(
        newNode.get('key'),
        (node, found) => [node, found],
        () => keyPath.push('left'),
        () => keyPath.push('right')
      )

      if (!oldNode && !found) return false

      resultTree = this.klass(
        resultTree.root.setIn(keyPath, oldNode.mergeDeep(newNode))
        , this.compareKeys
      )
    })
    return resultTree
  }, this)
}
