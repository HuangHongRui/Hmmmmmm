/**
 *  窗口滚动条距离底部触发
 *  @author Leo <464362353@qq.com>
 *  @param {String} className
 *  @param {Function} handle
 *  @param {Number} dist
 */

function getScrollTop(className: string) {

  let scrollTop;
  if (className) {
      scrollTop = document.querySelector(className).scrollTop;
  } else {
      scrollTop = document.body.scrollTop;
  }
  return scrollTop;

}

function getWindowHeight(className: string) {

  let windowHeight;
  if (className) {
      windowHeight = document.querySelector(className).clientHeight;
  } else {
      windowHeight = document.body.clientHeight;
  }
  return windowHeight;

}

function getScrollHeight(className: string) {

  let scrollHeight;
  if (className) {
      scrollHeight = document.querySelector(className).scrollHeight;
  } else {
      scrollHeight = document.body.scrollHeight;
  }
  return scrollHeight;

}

export function scrollDown(className: string, handle: Function, dist = 100) {

  const scrollTopWindowHeight = getScrollTop(className) + getWindowHeight(className);
  const scrollHeight = getScrollHeight(className) - dist;
  if (scrollTopWindowHeight >= scrollHeight) {
      handle();
  }

}