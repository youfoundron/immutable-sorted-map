import setIn from './setIn'
import deleteIn from './deleteIn'
import updateIn from './updateIn'
import mergeIn from './mergeIn'
import mergeDeepIn from './mergeDeepIn'

export default () => {
  it('#setIn', setIn)
  it('#deleteIn', deleteIn)
  it('#updateIn', updateIn)
  it('#mergeIn', mergeIn)
  it('#mergeDeepIn', mergeDeepIn)
}
