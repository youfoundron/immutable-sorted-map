import { fromJS } from 'immutable'
import SortedMap from '../../src'

export default () => {
  const mapA = new SortedMap(fromJS({
    item: {
      details: {
        model: 'acme',
        year: 1994
      }
    }
  }))
  const mapB = new SortedMap(fromJS({
    item: {
      details: {
        model: 'acme',
        year: 1999,
        color: 'blue'
      }
    }
  }))
  expect(mapA.mergeDeep(mapB).getIn(['item', 'details', 'year'])).toEqual(1999)
  expect(mapA.mergeDeep(mapB).getIn(['item', 'details', 'color'])).toEqual('blue')
  expect(mapB.mergeDeep(mapA).getIn(['item', 'details', 'year'])).toEqual(1994)
}
