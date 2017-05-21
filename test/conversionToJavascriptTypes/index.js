import toJS from './toJS'
import toJSON from './toJSON'
import toArray from './toArray'
import toObject from './toObject'

export default () => {
  it('#toJS', toJS)
  it('#toJSON', toJSON)
  it('#toArray', toArray)
  it('#toObject', toObject)
}
