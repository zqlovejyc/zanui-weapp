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
    zanTopTip(content = '', type = '', callback = null, duration = 3000) {
        this.setData({
            zanTopTip: {
                show: true,
                content: content,
                type: type
            }
        });
        setTimeout(() => {
            this.setData({
                'zanTopTip.show': false
            });
            typeof callback == 'function' && callback();
        }, duration);
    }
};