
import RadiaGradient from './radialgradient.js'


/**
 * 画布圆形绘制类
 */

export default class Arc {
  /**
   * x:圆心x坐标
   * y:圆心y坐标
   * r:圆半径
   */
  constructor({x, y, r, fill = 'white', strokeColor = 'transprant'}) {
    this.x = x
    this.y = y
    this.r = r
    this.fill = fill
    this.strokeColor = strokeColor
  }

  drawArcToCanvas(ctx) {
    ctx.beginPath()
    ctx.strokeStyle = this.strokeColor
    ctx.lineWidth = 4
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.fillStyle = this.fill
    ctx.fill()
  }
}