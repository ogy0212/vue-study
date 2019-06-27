// global component
Vue.component('global-comp', {
    data: function() {
        return {
            name: 'ogy',
        }
    },
    template: '<p>global component {{ name }}</p>',
});

// local component
var localComp = {
    data: function() {
        return {
            name: 'hogy',
        }
    },
    template: '<p>local component {{ name }}</p>',
}

new Vue({
    el: '#app',
})

new Vue({
    el: '#local-comp',
    components: {
        'ogy-comp': localComp,
    }
})
