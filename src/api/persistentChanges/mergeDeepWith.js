import identityFunc from '../../util/identityFunc'

export default function (merger = identityFunc, ...trees) {
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
        resultTree.root.setIn(keyPath, oldNode.mergeDeepWith(merger, newNode))
      )
    })
    return resultTree
  }, this)
}
