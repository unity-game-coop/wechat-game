
/**
 * 画布线条绘制类
 */

export default class Line {
  constructor (points, begin, strokeColor = 'black') {
    this.points = points || [0, 0]
    this.begin = begin || true
    this.strokeColor = strokeColor
  }

  drawLineToCanvas (ctx) {
    this.begin && ctx.beginPath()
    ctx.moveTo(...this.points[0])

    this.points.shift()
    this.points.forEach((arr, index) => {
      ctx.lineTo(...arr)
    })
    ctx.strokeStyle = this.strokeColor
    ctx.lineWidth = 5
    ctx.lineJoin = "round"
    ctx.stroke()
  }
 }