<template>
  <div>11332</div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: 'info',
      iconClass: '',
      customClass: '',
      onClose: null,
      showClose: false,
      closed: false,
      timer: null,
      dangerouslyUseHTMLString: false,
      center: false
    }
  },

  computed: {
  },

  watch: {
    closed (newVal) {
      if (newVal) {
        this.visible = false
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },

  methods: {
    destroyElement () {
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },

    close () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    keydown (e) {
      if (e.keyCode === 27) { // esc关闭消息
        if (!this.closed) {
          this.close()
        }
      }
    }
  },
  mounted () {
    document.addEventListener('keydown', this.keydown)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.keydown)
  }
}
</script>
