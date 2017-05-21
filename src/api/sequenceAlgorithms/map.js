export default function (mapper, context = this.root) {
  let _this = this
  this.traverseByDepth(
    node => {
      const key = node.get('key')
      const value = node.get('value')
      _this = _this.set(
        key,
        mapper(key, value, this)
      )
    }
    , context
  )
  return _this
}
