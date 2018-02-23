let Zan = require('../../dist/index');
Page(Object.assign({}, Zan.Select,Zan.extractComponentId, {

    data: {
        items: [
            {
                padding: 0,
                value: '1',
                name: '选项一',
                componentId:'input',
                bindInput: 'bindInput'
            },
            {
                padding: 0,
                value: '2',
                name: '选项二'
            },
        ],
        items1: [
            {
                padding: 0,
                value: '1',
                name: '选项一'
            },
            {
                padding: 0,
                value: '2',
                name: '选项二'
            },
        ],
        checked: {
            base: -1,
            color: -1,
            form: -1,
            custom: -1,
            input: -1,
            left: -1,
            multi: []
        },

        activeColor: '#4b0'
    },

    handleZanSelectChange({ componentId, value }) {
        this.setData({
            [`checked.${componentId}`]: value
        });
    },

    formSubmit(event) {
        console.log('[zan:field:submit]', event.detail.value);
    },

    bindInput(e) {
        let self = this,
            componentId = self.extractComponentId(e),
            value = e.detail.value;
        console.log(componentId,value);
    }
}));
