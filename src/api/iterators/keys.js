export default function () {
  const keys = []
  this.traverseByDepth(node => keys.push(node.get('key')))
  return {
    [Symbol.iterator] () {
      let i = 0
      return {
        next () {
          return {
            done: i > keys.length - 1,
            value: keys[i++]
          }
        }
      }
    }
  }
}
