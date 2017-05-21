export default function () {
  const result = {}
  this.traverseByDepth(node => {
    const key = node.get('key')
    const value = node.get('value')
    result[key] = value
  })
  return result
}
