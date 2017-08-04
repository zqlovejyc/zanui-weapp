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
    zanTip(content = '', callback = null, shake = false, duration = 3000) {
        this.setData({
            zanTip: {
                show: true,
                showMask: true,
                content: content,
                shake: shake
            }
        });
        setTimeout(() => {
            this.setData({
                'zanTip.show': false
            });
            setTimeout(() => {
                this.setData({
                    'zanTip.showMask': false
                });
                typeof callback == 'function' && callback();
            }, 400);
        }, duration);
    }
};