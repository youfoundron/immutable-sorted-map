export default function () {
  const result = []
  this.traverseByDepth(node =>
    result.push(node.get('value'))
  )
  return result
}
