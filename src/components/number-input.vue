<template>
  <nn-row>
    <nn-column nn-size="100%" v-if="label">
      <label v-html="label" />
    </nn-column>
    <nn-column nn-size="100%">
      <nn-row group>
        <nn-column nn-mode="prefix" nn-size="35">
          <btn
            @click="decrease()"
            size="md"
            glyph="minus"
            color="gravel"
            title="Decrease button"
          />
        </nn-column>
        <nn-column nn-size="100%-35*2">
          <p class="input-label" v-html="val" />
        </nn-column>
        <nn-column nn-mode="suffix" nn-size="35">
          <btn
            @click="increase()"
            size="md"
            glyph="plus"
            color="gravel"
            title="Increase button"
          />
        </nn-column>
      </nn-row>
    </nn-column>
  </nn-row>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    value: {
      type: Number,
    },
    increment: {
      type: Number,
      default: 1,
    },
  },
  data: () => ({
    val: 0,
  }),
  mounted() {
    this.val = this.value;
  },
  methods: {
    increase() {
      this.val += this.increment;
      this.$emit("update-value", this.val);
    },
    decrease() {
      this.val -= this.increment;
      this.$emit("update-value", this.val);
    },
  },
});
</script>