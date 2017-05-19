import {Map} from 'immutable'
import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap()
    .set('man', Map({age: 23, name: 'John Smith'}))
  expect(mySortedMap.getIn(['man', 'age'])).toEqual(23)
  expect(mySortedMap.getIn(['man', 'name'])).toEqual('John Smith')
  expect(mySortedMap.getIn(['man', 'notSet'])).toEqual(undefined)
  expect(mySortedMap.getIn(['man', 'notSet'], 'notSet')).toEqual('notSet')
}
