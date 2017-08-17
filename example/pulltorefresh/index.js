let Zan = require('../../dist/index');

Page(Object.assign({}, Zan.PullToRefresh, {
  data: {},
  onLoad() {
    this.zanPullToRefresh();
    console.log(this);
    let res = wx.getSystemInfoSync();
    this.setData({
      windowHeight: res.windowHeight + 60
    });
  },
  refreshCallback() {
    let self = this;
    setTimeout(() => {
      self.setData({
        'zanPullToRefresh.refresh': false
      });
      console.log('刷新完成');
    }, 2000);
  }
}));
