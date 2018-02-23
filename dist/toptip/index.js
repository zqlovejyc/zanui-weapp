/**
 * topTip
 */
module.exports = {
    /**
     * 顶部提示
     * @param {String} content 
     * @param {String} type 
     * @param {Function} callback 
     * @param {Number} duration 
     */
    showZanTopTip(content = '', type = '', callback = null, duration = 3000) {
       let self = this,
            zanTopTip = self.data.zanTopTip || {};
        if (zanTopTip && zanTopTip.timer) {
            clearTimeout(zanTopTip.timer);
            zanTopTip.timer = null;
        }
        if (typeof callback === 'number') duration = callback;
        let timer = setTimeout(() => {
            self.setData({
                'zanTopTip.show': false,
                'zanTopTip.timer': null
            });
            typeof callback == 'function' && callback();
        }, duration);
        self.setData({
            zanTopTip: {
                show: true,
                content: content,
                type: type,
                timer
            }
        });
    }
};