<template>
  <div class="carrousel">
    <button
      @blur="stopCarrousel()"
      @click="toggleCarrousel()"
      :class="[{ active: interval }, 'item']"
    >
      <template v-for="frameIndex in frames">
        <img
          :key="frameIndex"
          :class="{ active: currentFrame + 1 === frameIndex }"
          :src="getZapp(`img/3dlib/${item.name}/000${frameIndex}.webp`)"
        />
      </template>
    </button>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  props: {
    item: {
      type: Object,
    },
    start: {
      type: Number,
      default: 0,
    },
    rotationDelay: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    currentFrame: 0,
    interval: undefined,
    frames: 8,
  }),
  mounted() {
    this.currentFrame = this.start;
  },
  methods: {
    playCarrousel() {
      this.interval = setInterval(() => {
        this.currentFrame += 1;
        if (this.currentFrame > this.frames - 1) {
          this.currentFrame = 0;
        }
      }, this.rotationDelay);
    },
    stopCarrousel() {
      clearInterval(this.interval);
      this.interval = undefined;
    },
    toggleCarrousel() {
      if (this.interval) {
        this.stopCarrousel();
      } else {
        this.playCarrousel();
      }
    },
  },
});
</script>