<template>
  <nn-row class="row-block">
    <nn-column nn-size="100%">
      <legend>
        {{
          getColumnSize({
            width: selection.columns[index].width,
            height: selection.columns[index].height,
            widthSubtraction: selection.columns[index].subtraction,
            absoluteHeight: absoluteHeight,
            absoluteWidth: absoluteWidth,
          }).computedSize
        }}
        <small>
          {{
            getColumnSize({
              width: selection.columns[index].width,
              height: selection.columns[index].height,
              widthSubtraction: selection.columns[index].subtraction,
              absoluteHeight: absoluteHeight,
              absoluteWidth: absoluteWidth,
            }).columnClass
          }}
          {{
            getColumnSize({
              width: selection.columns[index].width,
              height: selection.columns[index].height,
              widthSubtraction: selection.columns[index].subtraction,
              absoluteHeight: absoluteHeight,
              absoluteWidth: absoluteWidth,
            }).columnStyle
          }}
        </small>
      </legend>

      <nn-row>
        <nn-column nn-size="100%">
          <label
            class="nn-btn"
            nn-mode="flat"
            nn-color="charcoal"
            :nn-active="absoluteWidth"
          >
            {{ $t("ui.section.gridBuilder.panel.columnStyle.absoluteWidth") }}
            <input type="checkbox" v-model="absoluteWidth" />
          </label>
        </nn-column>
      </nn-row>

      <slider
        v-if="absoluteWidth"
        :id="`id-${name}-width`"
        :label="$t('ui.section.gridBuilder.panel.columnStyle.width')"
        step="5"
        min="0"
        max="600"
        v-on:update-value="updateColVal('width', $event)"
        :value="selection.columns[index].width"
      />

      <template v-else>
        <nn-row>
          <nn-column nn-size="100%">
            <label :for="`id-${name}-width`">{{
              $t("ui.section.gridBuilder.panel.columnStyle.width")
            }}</label>
          </nn-column>
          <nn-column nn-size="100%">
            <nn-row group>
              <nn-column nn-size="100%">
                <input
                  :id="`id-${name}-width`"
                  type="range"
                  min="0"
                  class="nn-range nn-cobalt-blue"
                  :max="cssWClass.length - 1"
                  step="1"
                  v-model="selection.columns[index].width"
                />
              </nn-column>
              <nn-column nn-size="55%">
                <p class="input-label">
                  {{ getWidth(selection.columns[index].width).fraction }}
                  <span v-if="getWidth(selection.columns[index].width).percent">
                    <span class="bar-or" />{{
                      getWidth(selection.columns[index].width).percent
                    }}
                  </span>
                </p>
              </nn-column>
            </nn-row>
          </nn-column>
        </nn-row>

        <slider
          :id="`id-${name}-subtraction`"
          :label="
            $t('ui.section.gridBuilder.panel.columnStyle.widthSubtraction')
          "
          step="5"
          min="0"
          max="600"
          v-on:update-value="updateColVal('subtraction', $event)"
          :value="selection.columns[index].subtraction"
        />
      </template>

      <nn-row>
        <nn-column nn-size="100%">
          <label
            class="nn-btn"
            nn-mode="flat"
            nn-color="charcoal"
            :nn-active="absoluteHeight"
          >
            {{ $t("ui.section.gridBuilder.panel.columnStyle.absoluteHeight") }}
            <input type="checkbox" v-model="absoluteHeight" />
          </label>
        </nn-column>
      </nn-row>

      <slider
        v-if="absoluteHeight"
        :id="`id-${name}-height`"
        :label="$t('ui.section.gridBuilder.panel.columnStyle.height')"
        step="5"
        min="0"
        max="600"
        v-on:update-value="updateColVal('height', $event)"
        :value="selection.columns[index].height"
      />

      <nn-row v-else>
        <nn-column nn-size="100%">
          <label :for="`id-${name}-height`">{{
            $t("ui.section.gridBuilder.panel.columnStyle.height")
          }}</label>
        </nn-column>
        <nn-column nn-size="100%">
          <nn-row group>
            <nn-column nn-size="100%">
              <input
                :id="`id-${name}-height`"
                type="range"
                min="0"
                class="nn-range nn-cobalt-blue"
                :max="cssHClass.length - 1"
                step="1"
                v-model="selection.columns[index].height"
              />
            </nn-column>
            <nn-column nn-size="55%">
              <p class="input-label">
                {{ getHeight(selection.columns[index].height).fraction }}
                <span v-if="getHeight(selection.columns[index].height).percent">
                  <span class="bar-or" />{{
                    getHeight(selection.columns[index].height).percent
                  }}
                </span>
              </p>
            </nn-column>
          </nn-row>
        </nn-column>
      </nn-row>

      <nn-row>
        <nn-column nn-size="100%">
          <btn
            color="persian-red"
            :text="$t('ui.section.gridBuilder.panel.columnStyle.removeCTA')"
            @click="removeBlock()"
          />
        </nn-column>
      </nn-row>
    </nn-column>
  </nn-row>
</template>

<script>
import Vue from "vue";
import Slider from "@/mixins/slider";
import GridMixin from "@/mixins/grid";

export default Vue.extend({
  mixins: [Slider, GridMixin],
  props: {
    name: {
      type: String,
      default: "",
    },
    index: undefined,
  },
  data: () => ({
    absoluteWidth: undefined,
    absoluteHeight: undefined,
  }),
  mounted() {
    this.absoluteWidth = this.selection.columns[this.index].absoluteWidth;
    this.absoluteHeight = this.selection.columns[this.index].absoluteHeight;
  },
  watch: {
    absoluteWidth: function () {
      this.selection.columns[this.index].width = this.absoluteWidth
        ? 300
        : this.cssWClass.length - 1;
      this.selection.columns[this.index].subtraction = 0;
    },
    absoluteHeight: function () {
      this.selection.columns[this.index].height = 0;
    },
  },
  methods: {
    updateColVal(property, newVal) {
      this.selection.columns[this.index][property] = parseFloat(newVal);
    },
    removeBlock() {
      this.$store.commit("removeColumn", this.index);
      this.selection = this.$store.getters.getGridSelection;
    },
  },
});
</script>