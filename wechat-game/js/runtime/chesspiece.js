
import Arc from './canvasarc.js'
import RadialGradient from './radialgradient.js'
// 棋子大小-半径
const PIECE_SIZE = 18

/** 
 * 棋子类
 */
export default class ChessPiece {
  constructor (x, y, ctx) {
    this.x = x
    this.y = y
    this.ctx = ctx
    this.radialGradient = new RadialGradient(ctx, [x, y, 0, x, y, 30], ['#ff5c5c', '#fb2828', '#e80101', '#c50303'])
  }

  gerenate () {
    let x = this.x
    let y = this.y
    let strokeColor = "#c10707"
    let radialGradient = this.radialGradient.generate()
    let piece = new Arc({
      x, y, r: PIECE_SIZE, fill: radialGradient, strokeColor
    })
    piece.drawArcToCanvas(this.ctx)
  }
} 