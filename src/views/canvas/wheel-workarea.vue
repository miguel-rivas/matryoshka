<template lang="pug">
nn-scroll-area(nn-color="royal-purple")
  pie-chart(:chart-data="selection.colors")
</template>

<script>
import Vue from "vue";
import PieChart from "@/components/pie-chart.vue";

export default Vue.extend({
  components: {
    PieChart,
  },
  data: () => ({
    selection: {},
  }),
  created() {
    this.selection = this.$store.getters.getWheelSelection;
  },
});
</script>