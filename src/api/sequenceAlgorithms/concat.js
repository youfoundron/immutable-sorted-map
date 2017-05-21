export default function (...collections) {
  return collections.reduce((tree, collection) => {
    for (let [key, value] of collection.entries()) {
      tree = tree.set(key, value)
    }
    return tree
  }, this)
}
