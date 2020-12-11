<template>
  <div class="graph">
    <span id="view_time"></span>
    <chart></chart>
    <div class="btna"><router-link to="/">TOPに戻る</router-link></div>
  </div>
</template>

<script>
import Chart from './Chart';

export default {
  components: {
    Chart,
  },
}
</script>
