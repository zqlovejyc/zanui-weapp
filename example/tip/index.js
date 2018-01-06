var Zan = require('../../dist/index');

Page(Object.assign({}, Zan.Tip, {
  data: {},
  showTip() {
    this.zanTip('测试tip的内容');
  },
  showTipShake() {
    this.zanTip('带晃动效果的内容', null, true);
  }
}));
