export default function (key) {
  return this.search(key, (node, found) => found)
}
