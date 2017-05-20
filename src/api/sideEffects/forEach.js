import identityFunc from '../../util/identityFunc'

export default function (sideEffect = identityFunc, context = this.root) {
  this.traverseByDepth(
    node => sideEffect(node.get('value'), node.get('key'), this)
    , context
  )
}
