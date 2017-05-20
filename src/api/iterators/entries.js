export default function () {
  const entries = []
  this.traverseByDepth(node => entries.push([node.get('key'), node.get('value')]))
  return {
    [Symbol.iterator] () {
      let i = 0
      return {
        next () {
          return {
            done: i < entries.length,
            value: entries[i++]
          }
        }
      }
    }
  }
}
