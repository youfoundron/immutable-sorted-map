import isMap from './isMap'

export default function (data) {
  if (isMap(data) && data.has('key') && data.has('value')) return true
  return false
}
