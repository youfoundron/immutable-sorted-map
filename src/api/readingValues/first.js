export default function () {
  return this.getMinNode(this.root, node => node && node.get('value'))
}
