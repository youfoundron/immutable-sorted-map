import set from './set'
import _delete from './delete'
import deleteAll from './deleteAll'
import clear from './clear'
import update from './update'
import merge from './merge'
import mergeWith from './mergeWith'
import mergeDeep from './mergeDeep'
import mergeDeepWith from './mergeDeepWith'

export default () => {
  it('#set', set)
  it('#delete', _delete)
  it('#deleteAll', deleteAll)
  it('#clear', clear)
  it('#update', update)
  it('#merge', merge)
  it('#mergeWith', mergeWith)
  it('#mergeDeep', mergeDeep)
  it('#mergeDeepWith', mergeDeepWith)
}
