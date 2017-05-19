import {Map} from 'immutable'
import SortedMap from '../../src'

export default () => {
  const mySortedMap = new SortedMap()
    .set('man', Map({age: 23, name: 'John Smith'}))
  expect(mySortedMap.hasIn(['man', 'age'])).toEqual(true)
  expect(mySortedMap.hasIn(['man', 'name'])).toEqual(true)
  expect(mySortedMap.hasIn(['man', 'notSet'])).toEqual(false)
}
