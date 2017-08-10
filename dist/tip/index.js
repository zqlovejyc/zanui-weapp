/**
 * tip
 */
module.exports = {
  /**
   * 提示信息
   * @param {String} content 
   * @param {Function} callback 
   * @param {Boolean} shake 
   * @param {Number} duration 
   */
  zanTip(content = '', callback = null, shake = false, duration = 2000) {
    let self = this,
      zanTip = self.data.zanTip || {};
    if (zanTip.timer) {
      clearTimeout(zanTip.timer);
      zanTip.timer = undefined;
    }
    if (typeof callback === 'boolean') shake = callback;
    if (typeof callback === 'number') duration = callback;
    let timer = setTimeout(() => {
      self.setData({
        'zanTip.show': false
      });
      clearTimeout(timer);
      timer = setTimeout(() => {
        self.setData({
          'zanTip.showMask': false,
          'zanTip.timer': undefined
        });
      }, 100);
      typeof callback === 'function' && callback();
    }, duration);
    self.setData({
      zanTip: {
        show: true,
        showMask: true,
        content: content,
        shake: shake,
        timer
      }
    });
  }
};
