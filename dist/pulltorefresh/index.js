/**
 * pullToRefresh
 */
module.exports = {
  /**
   * 下拉刷新
   */
  zanPullToRefresh() {
    let self = this;
    if (!self.refreshCallback) {
      console.log('缺少下拉刷新回调方法：refreshCallback');
    }
    self.setData({
      'zanPullToRefresh.refresh': false,
      'zanPullToRefresh.pullToRefreshDown': true,
      'zanPullToRefresh.pullToRefreshTxt': '下拉刷新'
    });
  },
  /**
   * 滚动事件     
   */
  bindScroll(e) {
    let self = this,
      deltaY = e.detail.deltaY,
      scrollTop = e.detail.scrollTop;
    if (deltaY > 0 && scrollTop < -40) {
      self.setData({
        'zanPullToRefresh.pullToRefreshDown': false,
        'zanPullToRefresh.pullToRefreshTxt': '释放刷新',
      });
    }
    if (deltaY < 0 && scrollTop > -40 && scrollTop < 0) {
      self.setData({
        'zanPullToRefresh.pullToRefreshDown': true,
        'zanPullToRefresh.pullToRefreshTxt': '下拉刷新',
      });
    }
    self.setData({
      'zanPullToRefresh.deltaY': deltaY,
      'zanPullToRefresh.scrollTop': scrollTop
    });
  },
  /**
   * 移动离开
   */
  bindTouchEnd() {
    let self = this;
    if (self.data.zanPullToRefresh.deltaY > 0 && self.data.zanPullToRefresh.scrollTop < -40) {
      self.setData({
        'zanPullToRefresh.refresh': true,
        'zanPullToRefresh.pullToRefreshDown': true,
        'zanPullToRefresh.pullToRefreshTxt': '下拉刷新'
      });
      typeof self.refreshCallback == 'function' && self.refreshCallback();
    }
  }
};
