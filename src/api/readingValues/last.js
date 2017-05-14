export default function () {
  return this.getMaxNode(this.root, node => node && node.get('value'))
}
