<template lang="pug">
nn-scroll-area(nn-color="royal-purple")
  nn-container
    ul.img-gallery
      template(v-for="(item, itemIndex) in database")
        li(:key="`gallery${itemIndex}`")
          carrousel(
            :item="item",
            :start="randomFrame()",
            :rotationDelay="selection.rotationDelay"
          )
</template>

<script>
import Vue from "vue";
import { gallery3d } from "@/db/gallery3d";
import carrousel from "@/components/carrousel.vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  components: { carrousel },
  data: () => ({
    selection: {},
    database: gallery3d,
  }),
  computed: {
    ...mapGetters({
      panel: "getPanelVisibility",
    }),
  },
  methods: {
    randomFrame() {
      let randomNumber = Math.floor(Math.random() * 3) - 1;
      if (randomNumber < 0) {
        randomNumber = 7;
      }
      return randomNumber;
    },
  },
  created() {
    this.selection = this.$store.getters.getProjects3DSelection;
  },
});
</script>