<template>
  <nn-column size="50" class="main-panel">
    <nn-scroll-area color="royal-purple" :horizontal="false">
      <nn-row>
        <nn-column size="100%">
          <template v-for="(nav, navIndex) in navigation">
            <template v-if="nav.divider">
              <hr :key="`navIndex-${navIndex}`" />
            </template>
            <template v-else-if="!nav.route.includes($route.name)">
              <btn
                :to="{ name: nav.route[0] }"
                :key="nav.route[0]"
                mode="nav"
                color="shamrock"
                size="md"
                :title="nav.tooltip"
                :glyph="nav.icon"
              />
            </template>
            <template v-else>
              <btn
                :key="nav.route[0]"
                mode="nav"
                color="shamrock"
                size="md"
                :title="nav.tooltip"
                @click="toggleValue('panel'), playSound()"
                :glyph="nav.icon"
                active
              />
            </template>
          </template>
        </nn-column>
      </nn-row>
    </nn-scroll-area>
    <nn-row>
      <nn-column size="100%">
        <btn
          color="gold-tips"
          size="md"
          mode="nav"
          title="Switch to English"
          text="EN"
          @click="switchLanguage('en')"
          :active="$i18n.locale === 'en'"
        />
        <btn
          color="gold-tips"
          size="md"
          mode="nav"
          title="Switch to Spanish"
          text="ES"
          @click="switchLanguage('es')"
          :active="$i18n.locale === 'es'"
        />
        <btn
          color="gold-tips"
          size="md"
          mode="nav"
          title="Switch to Portuguese"
          text="PT"
          @click="switchLanguage('pt')"
          :active="$i18n.locale === 'pt'"
        />
        <hr />
        <btn
          color="gold-tips"
          size="md"
          mode="nav"
          title="Toggle theme button"
          glyph="brightness"
          @click="toggleValue('theme'), playSound()"
          :active="theme"
        />
      </nn-column>
    </nn-row>
  </nn-column>
</template>

<script>
import Vue from "vue";
import { mapGetters, mapMutations } from "vuex";
import { linkGithub, linkLinkedin } from "../db/user";
import i18n from "../i18n";
import { playSound } from "../modules/helpers";

export default Vue.extend({
  components: {},
  data: () => ({
    navigation: [
      {
        tooltip: i18n.t("projects.title"),
        icon: "duck",
        route: ["projects"],
      },
      {
        tooltip: "Resume",
        icon: "person",
        route: ["resume"],
      },
      {
        tooltip: i18n.t("statistics.title"),
        icon: "chart",
        route: ["statistics"],
      },
      {
        tooltip: i18n.t("githubOrg"),
        icon: "github",
        route: ["github"],
      },
      {
        divider: true,
      },
      {
        tooltip: i18n.t("images.title"),
        icon: "collections",
        route: ["images"],
      },
      {
        tooltip: i18n.t("videos.title"),
        icon: "movie",
        route: ["videos"],
      },
      {
        divider: true,
      },
      {
        tooltip: i18n.t("map.title"),
        icon: "airplane",
        route: ["locations"],
      },
      {
        tooltip: i18n.t("dollhouse.title"),
        icon: "home",
        route: ["dollhouse"],
      },
      {
        tooltip: i18n.t("avatar.title"),
        icon: "person",
        route: ["avatar"],
      },
      {
        tooltip: i18n.t("gearBuilder.title"),
        icon: "cog",
        route: ["gear"],
      },
      {
        tooltip: i18n.t("colorWheel.title"),
        icon: "palette",
        route: ["wheel"],
      },
      {
        tooltip: i18n.t("pixelEditor.title"),
        icon: "category",
        route: ["pixel"],
      },
      {
        divider: true,
      },
      {
        tooltip: i18n.t("three.section.cube.title"),
        icon: "cube",
        route: ["cube"],
      },
      {
        tooltip: i18n.t("three.section.spirit.title"),
        icon: "monster",
        route: ["spirit"],
      },
      {
        tooltip: i18n.t("three.section.drakkar.title"),
        icon: "boat",
        route: ["drakkar"],
      },
      {
        tooltip: i18n.t("three.section.car.title"),
        icon: "car",
        route: ["car"],
      },
      {
        tooltip: i18n.t("three.section.xwing.title"),
        icon: "rocket",
        route: ["xwing"],
      },
      {
        tooltip: i18n.t("three.section.2017.title"),
        icon: "book",
        route: ["portfolio2017"],
      },
      {
        tooltip: i18n.t("three.section.audio.title"),
        icon: "book",
        route: ["audio2"],
      },
      {
        divider: true,
      },
      {
        tooltip: i18n.t("css.section.house.title"),
        icon: "home",
        route: ["house"],
      },
      {
        tooltip: i18n.t("css.section.window.title"),
        icon: "window",
        route: ["window"],
      },
      {
        tooltip: i18n.t("css.section.minivan.title"),
        icon: "bus",
        route: ["minivan"],
      },
      {
        tooltip: i18n.t("css.section.pills.title"),
        icon: "medical",
        route: ["pills"],
      },
      {
        divider: true,
      },
      {
        tooltip: i18n.t("fake-audience.title"),
        icon: "moon",
        route: ["soundboard"],
      },
      {
        tooltip: i18n.t("ui.title"),
        icon: "color",
        route: ["ui", "colors", "icons"],
      },
      {
        divider: true,
      },
      {
        tooltip: i18n.t("timeline.title"),
        icon: "clock",
        route: [
          "timeline",
          "2014",
          "2014-home",
          "2014-projects",
          "2014-contact",
          "2016",
          "2018",
          "2018-home",
          "2018-presidente",
          "2018-drlogic",
          "2018-apap",
          "2018-bpr",
          "2022",
        ],
      },
    ],
    playSound,
    linkGithub,
    linkLinkedin,
  }),
  computed: {
    ...mapGetters({
      theme: "getTheme",
    }),
  },
  methods: {
    switchLanguage(lang) {
      playSound();
      this.$i18n.locale = lang;
    },
    ...mapMutations(["toggleValue"]),
  },
});
</script>