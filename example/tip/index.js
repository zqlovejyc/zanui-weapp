var Zan = require('../../dist/index');

Page(Object.assign({}, Zan.Tip, {
  data: {},
  showTip() {
    this.showZanTip('测试tip的内容');
  },
  showTipShake() {
    this.showZanTip('带晃动效果的内容', null, true);
  }
}));
