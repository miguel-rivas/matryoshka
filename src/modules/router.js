import Vue from 'vue';
import VueRouter from 'vue-router';

import DefaultPanelView from '../views/default-panel.vue';

import ResumeWorkareaView from '../views/resume-workarea.vue';
import UiRouter from '../router/ui';
import TimelineRouter from '../router/timeline';

import ProjectsWorkareaView from '../views/projects-workarea.vue';
import ProjectsPanelView from '../views/projects-panel.vue';
import StatisticsWorkareaView from '../views/statistics-workarea.vue';
import GithubWorkareaView from '../views/github-workarea.vue';

import ImagesWorkareaView from '../views/images-workarea.vue';
import ImagesPanelView from '../views/images-panel.vue';
import VideosWorkareaView from '../views/video-workarea.vue';
import SoundboardWorkareaView from '../views/soundboard-workarea.vue';

import GearWorkareaView from '../views/gear-workarea.vue';
import GearPanelView from '../views/gear-panel.vue';
import WheelWorkareaView from '../views/wheel-workarea.vue';
import WheelPanelView from '../views/wheel-panel.vue';
import LocationsPanelView from '../views/locations-panel.vue';
import LocationsWorkareaView from '../views/locations-workarea.vue';
import AvatarWorkareaView from '../views/avatar-workarea.vue';
import AvatarPanelView from '../views/avatar-panel.vue';
import PixelWorkareaView from '../views/pixel-workarea.vue';
import PixelPanelView from '../views/pixel-panel.vue';
import DollhouseWorkareaView from '../views/dollhouse-workarea.vue';
import DollhousePanelView from '../views/dollhouse-panel.vue';

import HouseWorkareaView from '../views/house-workarea.vue';
import WindowWorkareaView from '../views/window-workarea.vue';
import MinivanWorkareaView from '../views/minivan-workarea.vue';
import PillsWorkareaView from '../views/pills-workarea.vue';

import CubeWorkareaView from '../views/cube-workarea.vue';
import CubePanelView from '../views/cube-panel.vue';
import ThreePanelView from '../views/three-panel.vue';
import ThreeWorkareaView from '../views/three-workarea.vue';
import FlipbookWorkareaView from '../views/flipbook-workarea.vue';
import FlipbookPanelView from '../views/flipbook-panel.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/projects',
  },
  {
    name: 'resume',
    path: '/resume',
    components: {
      workarea: ResumeWorkareaView,
      panel: DefaultPanelView,
    },
  },
  {
    name: 'projects',
    path: '/projects',
    components: {
      workarea: ProjectsWorkareaView,
      panel: ProjectsPanelView,
    },
  },
  {
    name: 'statistics',
    path: '/statistics',
    components: {
      workarea: StatisticsWorkareaView,
    },
  },
  {
    name: 'github',
    path: '/github',
    components: {
      workarea: GithubWorkareaView,
    },
  },

  {
    name: 'images',
    path: '/images',
    components: {
      workarea: ImagesWorkareaView,
      panel: ImagesPanelView,
    },
  },
  {
    name: 'videos',
    path: '/videos',
    components: {
      workarea: VideosWorkareaView,
    },
  },
  {
    name: 'soundboard',
    path: '/soundboard',
    components: {
      workarea: SoundboardWorkareaView,
    },
  },


  {
    name: 'dollhouse',
    path: '/dollhouse',
    components: {
      workarea: DollhouseWorkareaView,
      panel: DollhousePanelView,
    },
  },
  {
    name: 'locations',
    path: '/locations',
    components: {
      workarea: LocationsWorkareaView,
      panel: LocationsPanelView,
    },
  },
  {
    name: 'avatar',
    path: '/avatar',
    components: {
      workarea: AvatarWorkareaView,
      panel: AvatarPanelView,
    },
  },

  {
    name: 'gear',
    path: '/gear',
    components: {
      workarea: GearWorkareaView,
      panel: GearPanelView,
    },
  },
  {
    name: 'wheel',
    path: '/wheel',
    components: {
      workarea: WheelWorkareaView,
      panel: WheelPanelView,
    },
  },
  {
    name: 'pixel',
    path: '/pixel',
    components: {
      workarea: PixelWorkareaView,
      panel: PixelPanelView,
    },
  },

  {
    name: 'cube',
    path: '/cube',
    components: {
      workarea: CubeWorkareaView,
      panel: CubePanelView,
    },
  },
  {
    name: 'spirit',
    path: '/spirit',
    components: {
      workarea: Vue.extend({
        props: {
          mesh: {
            default: "spirit"
          },
          minDistance: {
            default: 7.5,
          },
          maxDistance: {
            type: Number,
            default: 25,
          },
        },
        extends: ThreeWorkareaView,
      }),
      panel: ThreePanelView,
    },
  },

  {
    name: 'drakkar',
    path: '/drakkar',
    components: {
      workarea: Vue.extend({
        props: {
          mesh: {
            default: "drakkar"
          },
          minDistance: {
            default: 65,
          },
          maxDistance: {
            type: Number,
            default: 75,
          },
        },
        extends: ThreeWorkareaView,
      }),
      panel: ThreePanelView,
    },
  },
  {
    name: 'portfolio2017',
    path: '/portfolio2017',
    components: {
      workarea: Vue.extend({
        props: {
          book: {
            default: "art"
          },
          pages: {
            default: 14
          }
        },
        extends: FlipbookWorkareaView,
      }),
      panel: FlipbookPanelView,
    },
  },
  {
    name: 'audio2',
    path: '/audio2',
    components: {
      workarea: Vue.extend({
        props: {
          book: {
            default: "audio"
          },
          pages: {
            default: 12
          }
        },
        extends: FlipbookWorkareaView,
      }),
      panel: FlipbookPanelView,
    },
  },

  {
    name: 'car',
    path: '/car',
    components: {
      workarea: Vue.extend({
        props: {
          mesh: {
            default: "car"
          },
          minDistance: {
            default: 55,
          },
          maxDistance: {
            type: Number,
            default: 75,
          },
        },
        extends: ThreeWorkareaView,
      }),
      panel: ThreePanelView,
    },
  },
  {
    name: 'xwing',
    path: '/xwing',
    components: {
      workarea: Vue.extend({
        props: {
          mesh: {
            default: "xwing"
          },
          minDistance: {
            default: 35,
          },
          maxDistance: {
            type: Number,
            default: 55,
          },
        },
        extends: ThreeWorkareaView,
      }),
      panel: ThreePanelView,
    },
  },



  {
    name: 'house',
    path: '/house',
    components: {
      workarea: HouseWorkareaView,
    },
  },
  {
    name: 'window',
    path: '/window',
    components: {
      workarea: WindowWorkareaView,
    }
  },
  {
    name: 'pills',
    path: '/pills',
    components: {
      workarea: PillsWorkareaView,
    }
  },
  {
    name: 'minivan',
    path: '/minivan',
    components: {
      workarea: MinivanWorkareaView,
    }
  },


  {
    path: '*',
    redirect: '/'
  },

  /* ---------------------- nested ---------------------- */

  UiRouter,
  TimelineRouter,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router;