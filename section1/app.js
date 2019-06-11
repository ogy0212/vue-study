new Vue({
    el: '#app',
    data: {
        counter: 0,
    },
    methods: {
        increase: function(val) {
            this.counter += val;
        }
    },
    computed: {
        isGreater: function() {
            return this.counter > 5 ? 'greater' : 'less';
        }
    },
    watch: {
        counter: function() {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000)
        }
    },
})