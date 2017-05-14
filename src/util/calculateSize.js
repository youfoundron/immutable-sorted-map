export default function (node = this.root) {
  let size = 0
  this.traverseByDepth(n => size++, node)
  return size
}
