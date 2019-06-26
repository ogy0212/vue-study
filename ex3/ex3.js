new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function() {
                return this.value === 37 ? 'done' : 'not there yet';
            }
        },
        methods: {
            setHoge: function() {
                console.log(this.$refs.myHoge.innerText)
                this.$refs.myHoge.innerText = 'foo';
            }
        },
        watch: {
            result: function() {
                var vm = this;
                setTimeout(function() {
                    vm.value = 0;
                }, 2000);
            }
        },
    });