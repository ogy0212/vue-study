new Vue({
  el: '#exercise',
  data: {
    effect: '',
    css1: 'bigFont',
    css2: 'bgBlue',
    userClass: 'bgBlue',
    secondClass: 'bgBlue',
    boolean: 'true',
    width: 100,
    bgGreen: {
      backgroundColor: 'green'
    },
    progressBar: {
      height: '20px',
      backgroundColor: 'purple',
    },
    barLength: 10
  },
  computed: {
    isNarrow: function() {
      return this.boolean === 'true';
    }
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.effect = vm.effect === 'highlight' ? 'shrink' : 'highlight';
      }, 1000);
    },
    startProgress: function() {
      var vm = this;
      setInterval(() => {
        vm.barLength += 10;
      }, 100);
    }
  }
});
