<template lang="pug">
nn-scroll-area(nn-color="royal-purple")
  nn-row.row-block
    nn-column(nn-size="100%")
      legend Options

      nn-btn(
        @click="toggleValue('fallBackIcons')",
        nn-text="Test Fallback Icons",
        nn-color="gold-tips"
        :nn-active="fallBackIcons"
      )
</template>

<script>
import Vue from "vue";
import { mapMutations, mapGetters } from "vuex";

export default Vue.extend({
  methods: {
    ...mapMutations(["toggleValue"]),
  },
   computed: {
    ...mapGetters({
      fallBackIcons: "getFallBackValue",
    }),
  },
});
</script>