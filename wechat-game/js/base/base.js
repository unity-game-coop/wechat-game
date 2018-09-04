
/** 
 * 位置计算基准数据
 */
// 棋盘最外层方框的大小
export const CHECK_BOARD_SIZE = 300
// 棋盘方框之间的距离
export const RECT_DISTANCE = 50

export function initPos () {
  let screenHeight = canvas.height
  let screenWidth = canvas.width

  // 计算棋盘基准位置
  let yTop = (screenHeight - CHECK_BOARD_SIZE) / 2
  let yBottom = (screenHeight - CHECK_BOARD_SIZE) / 2 + CHECK_BOARD_SIZE
  let xLeft = (screenWidth - CHECK_BOARD_SIZE) / 2
  let xRight = (screenWidth - CHECK_BOARD_SIZE) / 2 + CHECK_BOARD_SIZE
  return { yTop, yBottom, xLeft, xRight}
}