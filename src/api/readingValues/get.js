export default function (key) {
  return this.search(key, node => node && node.get('value'))
}
