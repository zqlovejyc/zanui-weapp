var Zan = require('../../dist/index');

Page(Object.assign({}, Zan.TopTip, Zan.Tip, {
    data: {},
    topTipSuccess() {
        let self = this;
        self.showZanTopTip('toptip的内容', 'success', () => {
            self.showZanTip('回调函数', true);
        });
    },
    topTipError() {
        this.showZanTopTip('toptip的内容', 'error');
    },
    topTipWarn() {
        this.showZanTopTip('toptip的内容', 'warn');
    }
}));
