
import Arc from './canvasarc.js'
import RadialGradient from './radialgradient.js'
import { CHECK_BOARD_SIZE, RECT_DISTANCE, initPos } from '../base/base.js'
// 棋子大小-半径
const PIECE_SIZE = 18
// 棋子要绘制的点集合
let basePoint = initPos()
let halfBoardSize = CHECK_BOARD_SIZE / 2
let doubleDis = RECT_DISTANCE * 2
const coordCheckBoard = [
  // 棋盘最外层交点坐标
  [basePoint.xLeft, basePoint.yTop],
  [basePoint.xLeft + halfBoardSize, basePoint.yTop],
  [basePoint.xRight, basePoint.yTop],
  [basePoint.xLeft, basePoint.yTop + halfBoardSize],
  [basePoint.xLeft, basePoint.yBottom],
  [basePoint.xLeft + halfBoardSize, basePoint.yBottom],
  [basePoint.xRight, basePoint.yBottom],
  [basePoint.xRight, basePoint.yTop + halfBoardSize],

  // 棋盘第二层交点坐标
  [basePoint.xLeft + RECT_DISTANCE, basePoint.yTop + RECT_DISTANCE],
  [basePoint.xLeft + RECT_DISTANCE, basePoint.yTop + halfBoardSize],
  [basePoint.xLeft + RECT_DISTANCE, basePoint.yBottom - RECT_DISTANCE],
  [basePoint.xLeft + halfBoardSize, basePoint.yBottom - RECT_DISTANCE],
  [basePoint.xRight - RECT_DISTANCE, basePoint.yBottom - RECT_DISTANCE],
  [basePoint.xRight - RECT_DISTANCE, basePoint.yBottom - halfBoardSize],
  [basePoint.xRight - RECT_DISTANCE, basePoint.yTop + RECT_DISTANCE],
  [basePoint.xLeft + halfBoardSize, basePoint.yTop + RECT_DISTANCE],

  // 棋盘最内层交点坐标
  [basePoint.xLeft + doubleDis, basePoint.yTop + doubleDis],
  [basePoint.xLeft + doubleDis, basePoint.yTop + halfBoardSize],
  [basePoint.xLeft + doubleDis, basePoint.yBottom + doubleDis],
  [basePoint.xLeft + halfBoardSize, basePoint.yBottom - doubleDis],
  [basePoint.xRight - doubleDis, basePoint.yBottom - doubleDis],
  [basePoint.xRight - doubleDis, basePoint.yBottom - halfBoardSize],
  [basePoint.xRight - doubleDis, basePoint.yTop + doubleDis],
  [basePoint.xRight - halfBoardSize, basePoint.yTop + doubleDis],
]

/** 
 * 棋子类
 */
export default class ChessPiece {
  /**
   * x, y: 棋子的圆心坐标
   * ctx: 画布上下文
   * fill: 背景填充
   * strokeColor: 边框颜色 
   */
  constructor({ x, y, ctx, fill, strokeColor = "#c10707"}) {
    this.x = x
    this.y = y
    this.ctx = ctx
    this.fill = fill || new RadialGradient(ctx, [x, y, 0, x, y, 30], ['#ff5c5c', '#fb2828', '#e80101', '#c50303'])
    this.strokeColor = strokeColor
  }

  gerenate () {
    let x = this.x
    let y = this.y
    let strokeColor = this.strokeColor
    let fill = this.fill.generate()
    let piece = new Arc({
      x, y, r: PIECE_SIZE, fill: fill, strokeColor
    })
    piece.drawArcToCanvas(this.ctx)
  }
} 