/* 
* 封装introJs，方便传参应用
*
* @author nana.zheng@rccchina.com
* @since 2021.08.18
*/

import introJs from "intro.js"
import "intro.js/introjs.css"
export const intro = introJs

/* 
  ts文件里面的 , interface是接口规范 
  了解什么是接口：
    接口只是定义了一些方法，而没有去实现，多用于程序
  设计时，只是设计需要有什么样的功能，但是并没有实现任何功能，这些功
  能需要被另一个类（B）继承后，由 类B去实现其中的某个功能或全部功能。
*/
// interface Step {
//   element?: string;
//   intro: string;
//   position?: string;
// }

// interface Options {
//   steps: Step[]; // 引导步骤
//   prevLabel?: string; // 返回上一步的按钮的字符串
//   nextLabel?: string; // 返回下一步的按钮的字符串
//   skipLabel?: string; // 跳过引导的按钮的字符串
//   doneLabel?: string; // 结束按钮的字符串
//   showBullets?: boolean;  // 未知
//   highlightClass?: string;  // 高亮所使用的class名
//   hidePrev?: boolean;  // 是否在第一步隐藏上一步
//   hideNext?: boolean;  // 是否在最后一步隐藏下一步
//   showStepNumbers?: boolean;  // 是否显示当前步骤的索引数字
//   scrollToElement?: boolean;  // 未知
//   showButtons?: boolean;  // 是否显示所有按钮
//   disableInteraction?: boolean;  // 引导框内视图是否可交互
//   tooltipClass?: string;  // 提示框所使用的class名
//   showProgress?: boolean; // 是否显示进度条
//   overlayOpacity?: number;  // 蒙版的透明度
//   exitOnEsc?: boolean; // 是否使用键盘Esc退出
//   exitOnOverlayClick?: boolean; // 是否允许点击空白处退出
//   helperElementPadding?: number;  // 提示边框的padding
// }

/* 基本选项设置 */
const baseOptions = {
  steps: [],
  prevLabel: "上一步",
  nextLabel: "下一步",
  // skipLabel: "跳过",
  doneLabel: "结束",
  showBullets: false,
  highlightClass: "introjs",
  hidePrev: true,
  hideNext: true,
  showStepNumbers: false,
  scrollToElement: true,
  disableInteraction: false,
  // tooltipClass: "intro-no-pre",
  showProgress: false,
  overlayOpacity: 0.5,
  exitOnEsc: false,
  exitOnOverlayClick: false,
  helperElementPadding: 1
};

const getIntro = (options) => {
  return new introJs().setOptions(
    Object.assign(JSON.parse(JSON.stringify(baseOptions)), options)
  );
};

/* 常量放这里 */
export const homeIntro = getIntro({
  disableInteraction: true,
  doneLabel: '好的',
  hideNext: false,
  tooltipClass: "custom-tooltip",
  steps: [
    { 
      element: '.hello',
      intro: '步骤1：对应class为.step_1的元素进行选择提示。',
      position: 'right'
    },
    {
      element: '#hello-msg',
      intro: '步骤2：对应Id为#step_2的元素进行选择提示。',
      position: 'left'
    },
    {
      element: '.ul',
      intro: '步骤3：对应Iul的元素进行选择提示。',
      position: 'top'
    },
  ]
});
