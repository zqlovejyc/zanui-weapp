exports.Select = require('./select/index');
exports.Dialog = require('./dialog/index');
exports.Field = require('./field/index');
exports.NoticeBar = require('./noticebar/index');
exports.Stepper = require('./stepper/index');
exports.Switch = require('./switch/index');
exports.Tab = require('./tab/index');
exports.TopTip = require('./toptip/index');
exports.Tip = require('./tip/index');
exports.PullToRefresh = require('./pulltorefresh/index');

const { extend,extractComponentId } = require('./common/helper');
exports.extend = extend;
exports.extractComponentId = { extractComponentId: extractComponentId };

