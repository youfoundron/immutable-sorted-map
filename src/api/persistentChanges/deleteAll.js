export default function (keys) {
  return keys.reduce((tree, key) => tree.delete(key), this)
}
