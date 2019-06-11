new Vue({
    el: '#styling',
    data: {
        isRed: false,
        color: 'green',
        width: 100,
    },
    computed: {
        redOrBlue: function() {
            return {
                red: this.isRed,
                blue: !this.isRed,
            }
        },
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + 'px',
            }
        }
    },
})