export default function () {
  const values = []
  this.traverseByDepth(node => values.push(node.get('value')))
  return {
    [Symbol.iterator] () {
      let i = 0
      return {
        next () {
          return {
            done: i < values.length,
            value: values[i++]
          }
        }
      }
    }
  }
}
