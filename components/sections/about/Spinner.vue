<template>
  <div class="circle">
    <div class="circle-percent-text-body">
      <span
        class="percent-text"
        :style="{ 'font-size': percentFontSize }"
      ></span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
const $ = require('jquery-easing')
export default {
  props: {
    progress: {
      type: Number,
      required: true,
      default: 0.25
    },
    size: {
      type: Number,
      required: false,
      default: 120
    },
    startAngle: {
      type: Number,
      default: 0
    },
    thickness: {
      type: Number,
      default: 10
    },
    percentFontSize: {
      type: String,
      required: false,
      default: function() {
        return (this.size / 4).toString() + 'px'
      }
    },
    animation: {
      required: false,
      default: function() {
        return { duration: 1200, easing: 'circleProgressEasing' }
      },
      validator: function(value) {
        return value instanceof Object || value === false
      }
    },
    animationStartValue: {
      type: Number,
      required: false,
      default: 0.0
    },
    reverse: {
      type: Boolean,
      default: false
    },
    lineCap: {
      type: String,
      default: 'butt'
    },
    fill: {
      type: Object,
      default: () => {
        return { color: '#00adb5' }
      }
    },
    emptyFill: {
      type: String,
      default: 'rgba(0, 0, 0, .1)'
    },
    insertMode: {
      type: String,
      default: 'append'
    },
    showPercent: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    require('jquery-circle-progress')
    const vm = this
    $(vm.$el)
      .on('circle-inited', function(event) {
        renderCircleBody(this, vm.progress / 100)
        vm.$emit('vue-circle-init', event)
      })
      .circleProgress({
        value: this.convertedProgress(vm.progress),
        size: vm.size,
        startAngle: vm.startAngle,
        reverse: vm.reverse,
        lineCap: vm.lineCap,
        fill: vm.fill,
        emptyFill: vm.emptyFill,
        animation: vm.animation,
        animationStartValue: vm.animationStartValue,
        insertMode: vm.insertMode,
        thickness: vm.thickness
      })
      .on('circle-animation-progress', function(event, progress, stepValue) {
        renderCircleBody(this, stepValue)
        vm.$emit('vue-circle-progress', event, progress, stepValue * 100)
      })
      .on('circle-animation-end', function(event) {
        vm.$emit('vue-circle-end', event)
      })

    function renderCircleBody(self, value) {
      if (vm.showPercent) {
        $(self)
          .find('span.percent-text')
          .html(Math.floor(value * 100) + '%')
      }
    }
  },
  beforeDestroy: function() {
    $(this.$el).remove()
  },
  methods: {
    convertedProgress(progress) {
      return progress / 100
    },
    updateProgress(value) {
      if ($.type(value) === 'number') {
        $(this.$el).circleProgress('value', this.convertedProgress(value))
      }
    },
    updateFill: function(fill) {
      const circle = $(this.$el).data('circle-progress')
      circle.fill = fill
      circle.initFill()
    }
  }
}
</script>

<style scoped>
.circle {
  position: relative;
  display: inline-block;
  margin-bottom: 25px;
}
.circle-percent-text-body {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.percent-text {
  font-weight: bold;
}
</style>
