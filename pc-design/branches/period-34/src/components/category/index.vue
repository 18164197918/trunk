<template>
    <div>
        <app-top-head></app-top-head>
        <app-left-nav></app-left-nav>
        <div class="center-content">
            <router-view/>
        </div>

    </div>
</template>

<script>
import appLeftNav from './common/app-left-nav.vue'
import appTopHead from './common/app-top-head.vue'
//  import appContent from './common/app-content.vue'

export default {
  name: 'bam-manage',
  data () {
    return {
    }
  },
  components: {
    appLeftNav,
    appTopHead
    //      appContent,
  }
}
</script>
<style>
    .center-content {
        position: fixed;
        left: 80px;
        top: 80px;
        right: 0;
        bottom: 0;
        padding: 0px;
        /*background-color: $ gary-wd;*/
        @include scrollbar(0);
    }
</style>
