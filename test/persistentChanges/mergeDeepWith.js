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
  expect(mapA
    .mergeDeepWith((x, y) => x > y ? x : y, mapB)
    .getIn(['item', 'details', 'year'])
  ).toEqual(1999)
  expect(mapB
    .mergeDeepWith((x, y) => x > y ? x : y, mapA)
    .getIn(['item', 'details', 'year'])
  ).toEqual(1999)
  expect(mapA
    .mergeDeepWith((x, y) => x > y ? x : y, mapB)
    .getIn(['item', 'details', 'color'])
  ).toEqual('blue')
}
