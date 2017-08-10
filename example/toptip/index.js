var Zan = require('../../dist/index');

Page(Object.assign({}, Zan.TopTip, Zan.Tip, {
    data: {},
    topTipSuccess() {
        let self = this;
        self.zanTopTip('toptip的内容', 'success', () => {
            self.zanTip('回调函数', true);
        });
    },
    topTipError() {
        this.zanTopTip('toptip的内容', 'error');
    },
    topTipWarn() {
        this.zanTopTip('toptip的内容', 'warn');
    }
}));
