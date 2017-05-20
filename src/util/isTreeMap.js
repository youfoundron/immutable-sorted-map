import isMap from './isMap'

export default function (data) {
  return (
    isMap(data) &&
    data.has('key') &&
    data.has('value')
  )
}
