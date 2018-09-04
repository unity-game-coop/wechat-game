
// import Sprite from '../base/sprite.js'
import Line from './canvasline.js'
import { CHECK_BOARD_SIZE, RECT_DISTANCE, initPos } from  '../base/base.js'

/**
 * 棋盘绘制类
 */
export default class CheckerBoard {
  constructor (ctx) {
    this.ctx = ctx
    this.line = null
    this.base = initPos()
  }
  
  /** 
   * 初始化一些绘制棋盘需要的初始数据
   */
  init () {
    let screenHeight = canvas.height
    let screenWidth = canvas.width

    // 计算棋盘基准位置
    this.yTop = (screenHeight - CHECK_BOARD_SIZE) / 2
    this.yBottom = (screenHeight - CHECK_BOARD_SIZE) / 2 + CHECK_BOARD_SIZE
    this.xLeft = (screenWidth - CHECK_BOARD_SIZE) / 2
    this.xRight = (screenWidth - CHECK_BOARD_SIZE) / 2 + CHECK_BOARD_SIZE
  }

  /**
   * 根据坐标绘制棋盘线条
   */ 
  draw (data) {
    this.line = new Line(data, true)
    this.line.drawLineToCanvas(this.ctx)
  }
  
  /**
   * 计算绘制棋盘外层方框所需坐标
   */
  calcOutterCoordinate () {
    // 左上角
    let leftTop = [this.base.xLeft, this.base.yTop]
    // 右上角
    let rightTop = [this.base.xRight, this.base.yTop]
    // 右下角
    let rightBottom = [this.base.xRight, this.base.yBottom]
    // 左下角
    let leftBottom = [this.base.xLeft, this.base.yBottom]

    return [leftTop, rightTop, rightBottom, leftBottom, leftTop]
  }

  /**
   * 计算绘制棋盘中层方框所需坐标
   */
  calcMiddleCoordinate () {
    let secondLeftTop = [this.base.xLeft + RECT_DISTANCE, this.base.yTop + RECT_DISTANCE]
    let secondRightTop = [this.base.xRight - RECT_DISTANCE, this.base.yTop + RECT_DISTANCE]
    let secondRightBottom = [this.base.xRight - RECT_DISTANCE, this.base.yBottom - RECT_DISTANCE]
    let secondLeftBottom = [this.base.xLeft + RECT_DISTANCE, this.base.yBottom - RECT_DISTANCE]

    return [secondLeftTop, secondRightTop, secondRightBottom, secondLeftBottom, secondLeftTop]
  }

  /**
   * 计算绘制棋盘内层方框所需坐标
   */
  calcInnerCoordinate () {
    const distance = RECT_DISTANCE * 2
    let thirdLeftTop = [this.base.xLeft + distance, this.base.yTop + distance]
    let thirdRightTop = [this.base.xRight - distance, this.base.yTop + distance]
    let thirdRightBottom = [this.base.xRight - distance, this.base.yBottom - distance]
    let thirdLeftBottom = [this.base.xLeft + distance, this.base.yBottom - distance]

    return [thirdLeftTop, thirdRightTop, thirdRightBottom, thirdLeftBottom, thirdLeftTop]
  }

  /**
   * 计算外层到内层连线坐标
   */
  calcMiddleLineCoodrinate () {
    // 左
    let startLeftPoint = [this.base.xLeft, this.base.yTop + CHECK_BOARD_SIZE / 2]
    let endLeftPoint = [this.base.xLeft + RECT_DISTANCE * 2, this.base.yTop + CHECK_BOARD_SIZE / 2]

    // 上
    let startTopPoint = [this.base.xLeft + CHECK_BOARD_SIZE / 2, this.base.yTop]
    let endTopPoint = [this.base.xLeft + CHECK_BOARD_SIZE / 2, this.base.yTop + RECT_DISTANCE * 2]

    // 右
    let startRightPoint = [this.base.xRight, this.base.yTop + CHECK_BOARD_SIZE / 2] 
    let endRightPoint = [this.base.xRight - RECT_DISTANCE * 2, this.base.yTop + CHECK_BOARD_SIZE / 2]

    // 下
    let startBottomPoint = [this.base.xLeft + CHECK_BOARD_SIZE / 2, this.base.yBottom]
    let endBottomPoint = [this.base.xLeft + CHECK_BOARD_SIZE / 2, this.base.yBottom - RECT_DISTANCE * 2]
    
    return [[startLeftPoint, endLeftPoint],
            [startTopPoint, endTopPoint],
            [startRightPoint, endRightPoint],
            [startBottomPoint, endBottomPoint]]
  }

  /**
   * 绘制棋盘到画布
   */
  drawToCanvas () {
    this.draw(this.calcOutterCoordinate())
    this.draw(this.calcMiddleCoordinate())
    this.draw(this.calcInnerCoordinate())
    this.calcMiddleLineCoodrinate().forEach(arr => {
      this.draw(arr)
    })
  }
}