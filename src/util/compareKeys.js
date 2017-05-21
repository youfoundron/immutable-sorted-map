export default (keyA, keyB) => {
  if (keyA < keyB) return -1
  if (keyA > keyB) return 1
  return 0
}
