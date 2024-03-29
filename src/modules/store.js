import Vue from 'vue';
import Vuex from 'vuex';

import { modalState } from '../store/modal';
import { avatarState } from '../store/avatar';
import { threeState } from '../store/three';
import { gearState } from '../store/gear';
import { pixelState } from '../store/pixel';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    panel: false,
    panelSize: ['300', '100%-300-50-35'],
    theme: false,
    fullscreen: false,
    fallBackIcons: false,
    params: {
      city: "berlin",
      name: "",
    },
    alert: {
      message: "",
      status: "",
    },
    modalState,
    selection: {
      family: {
        layerSpacing: 16,
        nodeSpacing: 32,
        verticalOrientation: false,
      },
      threeState,
      gearState,
      avatarState,
      pixelState,
      dollhouse: {
        viewSide: 'left',
        mapCenter: {
          x: 0,
          y: 0,
        },
      },
      locations: {
        mapCenter: {
          x: 0,
          y: 0,
        },
      },
      timeline: {
        theme2014: 'clock',
        theme2016: '',
      },
      stargaze: {
        hue: 240,
      },
      projects3d: {
        rotationDelay: 200,
      },
      wheel: {
        colors: 12,
      }
    },
  },
  mutations: {
    setParam(state, payload) {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      state.params[payload] = urlParams.get(payload);
    },
    setValue(state, payload) {
      state[payload.name] = payload.value;
    },
    centerMap(state, payload) {
      state.selection.locations.mapCenter = payload.position;
    },
    toggleValue(state, payload) {
      state[payload] = !state[payload];
    },
    setTheme(state, payload) {
      state.selection.timeline[payload.name] = payload.value;
    },
    toggleTheme(state, payload) {
      if(state.selection.timeline[payload.name] !== payload.value){
        state.selection.timeline[payload.name] = payload.value;
      } else {
        state.selection.timeline[payload.name] = payload.alt;
      }
    },
    toggleViewSide(state) {
      if(state.selection.dollhouse.viewSide === 'right'){
        state.selection.dollhouse.viewSide = 'left';
      } else {
        state.selection.dollhouse.viewSide = 'right';
      }
    },
  },
  getters: {
    getFamilySelection: state => state.selection.family,
    getFallBackValue: state => state.fallBackIcons,
    getParams: state => state.params,
    getGridSize: state => state.selection.pixelState.gridSize,
    getPanelVisibility: state => state.panel,
    getPanelSize: state => state.panelSize,
    getFullscreen: state => state.fullscreen,
    getTheme: state => state.theme,
    getTheme2014: state => state.selection.timeline.theme2014,
    getTheme2016: state => state.selection.timeline.theme2016,
    getAlert: state => state.alert,
    getModal: state => state.modalState,
    getStargazeSelection: state => state.selection.stargaze,
    getGearSelection: state => state.selection.gearState,
    getWheelSelection: state => state.selection.wheel,
    getLocationSelection: state => state.selection.locations,
    getMeshSelection: state => state.selection.threeState,
    getProjects3DSelection: state => state.selection.projects3d,
    getAvatarSelection: state => state.selection.avatarState,
    getPixelSelection: state => state.selection.pixelState,
    getPixelGridSelection: state => state.selection.pixelState.pixelGrid,
    getDollHouseSelection: state => state.selection.dollhouse,
    getDollHouseViewSide: state => state.selection.dollhouse.viewSide,
    getLock: state => state.selection.pixelState.lock,
  }
});