export default function (key, notSetValue) {
  return this.search(key, node =>
    (node && node.get('value')) || notSetValue
  )
}
