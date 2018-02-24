//组件
exports.Actionsheet = require('./actionsheet/index');
exports.Select = require('./select/index');
exports.Dialog = require('./dialog/index');
exports.Field = require('./field/index');
exports.NoticeBar = require('./noticebar/index');
exports.Stepper = require('./stepper/index');
exports.Switch = require('./switch/index');
exports.Tab = require('./tab/index');
exports.TopTip = require('./toptip/index');
exports.Toast = require('./toast/index');
exports.Tip = require('./tip/index');
exports.PullToRefresh = require('./pulltorefresh/index');

//方法
const { extend,extractComponentId,extendCreator } = require('./common/helper');
exports.extend = extend;
exports.extractComponentId = extractComponentId;
exports.extendCreator = extendCreator;