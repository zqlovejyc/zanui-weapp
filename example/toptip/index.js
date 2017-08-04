var Zan = require('../../dist/index');

Page(Object.assign({}, Zan.TopTip, {
  data: {},
  topTipSuccess() {
    this.zanTopTip('toptip的内容', 'success');
  },
  topTipError() {
    this.zanTopTip('toptip的内容', 'error');
  },
  topTipWarn() {
    this.zanTopTip('toptip的内容', 'warn');
  }
}));
