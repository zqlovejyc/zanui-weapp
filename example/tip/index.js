var Zan = require('../../dist/index');

Page(Object.assign({}, Zan.Tip, {
  data: {},
  showTip() {
    this.zanTip('tip的内容');
  },
  showTipShake() {
    this.zanTip('tip的内容', null, true);
  }
}));
