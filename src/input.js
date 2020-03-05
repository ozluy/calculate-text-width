const _calcTW = (value, font = "normal 500 14px sans-serif") => {
  const canvas =
    _calcTW.canvas ||
    (_calcTW.canvas = document.createElement('canvas'))
  const context = canvas.getContext('2d')
  context.font = font
  const metrics = context.measureText(value)
  return metrics.width
}
export default _calcTW
